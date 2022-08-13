export const AuthenRouter = [
  {
    path: "/dang-nhap",
    name: "LoginPage",
    meta: {
      title: "Đăng nhập",
    },
    component: () => import("@/views/authen/Login.vue"),
  },
  {
    path: "/dang-ky",
    name: "RegisterPage",
    meta: {
      title: "Đăng Ký",
    },
    component: () => import("@/views/authen/Register.vue"),
  },
];
