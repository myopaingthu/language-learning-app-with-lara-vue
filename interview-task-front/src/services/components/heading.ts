import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const logoUrl = ref<string>(
      "https://cdn.pixabay.com/photo/2017/09/07/10/07/english-2724442__340.jpg"
    );

    return { logoUrl };
  },
});
