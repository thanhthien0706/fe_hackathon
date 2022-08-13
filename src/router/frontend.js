export const FrontendRouter = [
  {
    path: "/chi-tiet/:slug_blog",
    name: "detailPage",
    component: () => import("@/views/frontend/DetailBlogPage.vue"),
  },
  {
    path: "/lien-he",
    name: "contactPage",
    meta: {
      title: "Liên hệ với chúng tôi",
    },
    component: () => import("@/views/frontend/ContactPage.vue"),
  },
  {
    path: "/thu-tuc-hanh-chinh",
    name: "administrativeproceduresPage",
    meta: {
      title: "Thủ tục hành chính",
    },
    component: () => import("@/views/frontend/ProceduresPage.vue"),
  },
  {
    path: "/",
    name: "homePage",
    meta: {
      title: "Trang chủ",
    },
    component: () => import("@/views/frontend/HomePage.vue"),
  },
];
