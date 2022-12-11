import { defineComponent, ref, onMounted, computed } from "vue";
import constants from "@/constants";
import axios from "axios";

interface Question {
  id: number;
  imageUrl: string;
  englishWord: string;
  myanmarWord: string;
}

export default defineComponent({
  setup() {
    const stateData = ref<Array<Question>>([]);
    const displayQuestion = ref<Question>();
    const isFinishedApi = ref<Boolean>(false);
    const answer = ref<String>();
    const answerErr = ref<String>();
    const correctAnswer = ref<String>();
    const totalQuestionCount = ref<Number>();

    onMounted(() => {
      axios.defaults.baseURL = constants.API_BASE_URL;
      fetchApiData();
    });

    const randomWord = computed(() => {
      let words: string[] = [
        displayQuestion.value?.englishWord as string,
        displayQuestion.value?.myanmarWord as string,
      ];
      let randomIndex: number = Math.floor(Math.random() * words.length);
      let randomWrd: string = words[randomIndex];
      words.splice(randomIndex, 1);
      correctAnswer.value = words[0];
      return randomWrd;
    });

    const correctAnswerCount = computed(
      () => (totalQuestionCount.value as number) - stateData.value.length
    );

    const leftQuestionCount = computed(() => stateData.value.length);

    const fetchApiData = () => {
      axios.get("/question")
        .then((response) => {
          if (response.status == constants.JSON_RESPONSE.HTTP_OK) {
            if (response.data.length > 0) {
              stateData.value = response.data;
              totalQuestionCount.value = response.data.length;
              chooseRandomQuestion();
              isFinishedApi.value = true;
            } else {
              alert('There is no response data from server.');
            }
          }
        })
        .catch(error => console.log(error));
    };

    const chooseRandomQuestion = () => {
      let randomQuestion: Question =
        stateData.value[Math.floor(Math.random() * stateData.value.length)];
      if (displayQuestion.value && stateData.value.length > 1) {
        while (displayQuestion.value.id == randomQuestion.id) {
          randomQuestion =
            stateData.value[Math.floor(Math.random() * stateData.value.length)];
        }
        displayQuestion.value = randomQuestion;
        return;
      }

      displayQuestion.value = randomQuestion;
    };

    const submitAnswer = () => {
      if (!answer.value) {
        answerErr.value = constants.VALIDATION_ERROR_MESSAGE.REQUIRED("Answer");
        return;
      }

      answerErr.value = "";
      if (chkAnswer()) {
        updateStateData();
        if (stateData.value.length == 0) {
          isFinishedApi.value = false;
          fetchApiData();
        }
      }

      answer.value = "";
      chooseRandomQuestion();
    };

    const chkAnswer = () => {
      return correctAnswer.value == answer.value;
    };

    const updateStateData = () => {
      let index: number = stateData.value
        .map((question) => question.id)
        .indexOf(displayQuestion.value?.id as number);
      stateData.value.splice(index, 1);
    };

    return {
      displayQuestion,
      isFinishedApi,
      randomWord,
      answer,
      answerErr,
      correctAnswerCount,
      totalQuestionCount,
      leftQuestionCount,
      submitAnswer,
    };
  },
});
