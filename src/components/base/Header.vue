<template>
  <header class="header-default">
    <nav class="navbar navbar-expand-lg">
      <div class="container-xl">
        <!-- site logo -->
        <router-link class="navbar-brand" to="/"
          ><img src="@/assets/images/logo.svg" alt="logo"
        /></router-link>

        <div class="collapse navbar-collapse">
          <!-- menus -->
          <ul class="navbar-nav mr-auto">
            <li
              class="nav-item dropdown"
              :class="{ active: el.link == $route.name }"
              v-for="el in listPage"
              :key="el.id"
            >
              <router-link class="nav-link" :to="{ name: el.link }"
                >{{ el.name }}
                <i class="fa-solid fa-angle-down" v-if="el.child.length"></i>
              </router-link>
              <ul class="dropdown-menu" v-if="el.child.length">
                <li v-for="item in el.child" :key="item.id">
                  <a class="dropdown-item" href="index.html">{{ item.name }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- header right section -->
        <div class="header-right">
          <!-- social icons -->
          <ul class="social-icons list-unstyled list-inline mb-0">
            <li class="list-inline-item">
              <router-link :to="{ name: 'LoginPage' }">Đăng nhập</router-link>
            </li>
            <li class="list-inline-item">
              <router-link :to="{ name: 'RegisterPage' }">Đăng ký</router-link>
            </li>
          </ul>
          <!-- header buttons -->
          <div class="header-buttons">
            <button class="search icon-button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <button class="burger-menu icon-button">
              <i class="fa-solid fa-grip-lines"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      listPage: [
        {
          id: 0,
          name: "Trang chủ",
          link: "homePage",
          child: [
            {
              id: 0,
              name: "Thể loại",
              link: "homePage",
            },
          ],
        },
        {
          id: 1,
          name: "Thủ tục hành chính",
          link: "administrativeproceduresPage",
          child: [],
        },
        {
          id: 2,
          name: "Liên hệ",
          link: "contactPage",
          child: [],
        },
      ],
    };
  },
};
</script>

<style></style>
