<template>
  <LayoutDefault>
    <HomeHeroSection />
    <HomeMainContentSection />
  </LayoutDefault>
</template>

<script>
import LayoutDefault from "@/layout/LayoutDefault.vue";
import HomeHeroSection from "@/components/frontend/HomeHeroSection.vue";
import HomeMainContentSection from "@/components/frontend/HomeMainContentSection.vue";

export default {
  name: "HomePage",
  components: { LayoutDefault, HomeHeroSection, HomeMainContentSection },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style></style>
