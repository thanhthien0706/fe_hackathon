<template>
  <LayoutDefault>
    <ContactHeaderPage />
    <ContactMainContent />
  </LayoutDefault>
</template>

<script>
import LayoutDefault from "@/layout/LayoutDefault.vue";
import ContactHeaderPage from "@/components/frontend/ContactHeaderPage.vue";
import ContactMainContent from "@/components/frontend/ContactMainContent.vue";

export default {
  components: { LayoutDefault, ContactHeaderPage, ContactMainContent },
};
</script>

<style></style>
