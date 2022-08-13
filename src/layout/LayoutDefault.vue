<template>
  <div class="site-wrapper">
    <div class="main-overlay"></div>
    <HeaderVue />

    <slot></slot>

    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from "@/components/base/Header.vue";
import FooterVue from "@/components/base/Footer.vue";

export default {
  name: "LayoutDefault",
  components: { HeaderVue, FooterVue },
};
</script>

<style></style>
