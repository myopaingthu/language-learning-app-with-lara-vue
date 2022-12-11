<template>
  <div v-if="isFinishedApi">
    <div class="card">
      <div class="card-cnt">
        <div class="result-blk clearfix sp">
          <div class="points">
            <div class="float-left right">
              <i class="fas fa-thumbs-up"></i>
              <span>{{ correctAnswerCount }} / {{ totalQuestionCount }}</span>
            </div>
            <div class="float-right remain">
              <i class="fas fa-thumbs-down"></i>
              <span>{{ leftQuestionCount }} / {{ totalQuestionCount }}</span>
            </div>
          </div>
        </div>
        <div class="que-img">
          <img :src="displayQuestion.imageUrl" alt="Question Image" />
        </div>
        <div class="que-txt">{{ randomWord }}</div>
        <form class="ans-form">
          <div class="ans-input">
            <input type="text" v-model.trim="answer" />
            <span v-if="answerErr" class="err-msg">*{{ answerErr }}</span>
          </div>
          <div class="submit">
            <button @click.prevent="submitAnswer">Let's see</button>
          </div>
        </form>
        <div class="result-blk clearfix pc">
          <div class="points">
            <div class="float-left right">
              <i class="fas fa-thumbs-up"></i>
              <span>{{ correctAnswerCount }} / {{ totalQuestionCount }}</span>
            </div>
            <div class="float-right remain">
              <i class="fas fa-thumbs-down"></i>
              <span>{{ leftQuestionCount }} / {{ totalQuestionCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="@/services/views/index.ts" lang="ts">
</script>

<style scoped>
@import "@/assets/views/index.css";
</style>
