<style>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>

<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <router-link :to="{ name: 'homePage' }">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </router-link>
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <!-- Name input -->
            <div class="form-outline mb-4">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Nhập tên của bạn"
                v-model="formUser.name"
              />
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Nhập email..."
                v-model="formUser.email"
              />
            </div>

            <!-- phone input -->
            <div class="form-outline mb-4">
              <input
                type="number"
                class="form-control form-control-lg"
                placeholder="Nhập số điện thoại..."
                v-model="formUser.phone"
              />
            </div>

            <!-- Password input -->
            <div class="form-outline mb-3">
              <input
                type="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Nhập mật khẩu"
                v-model="formUser.password"
              />
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="button"
                class="btn btn-primary btn-lg customeBtn"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
                @click="onHandleRegister"
              >
                Đăng nhập
              </button>
              <p class="small fw-bold mt-2 pt-1 mb-0">
                Bạn đã có tài khoản?
                <router-link :to="{ name: 'LoginPage' }" class="link-danger"
                  >Đăng nhập</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      formUser: {
        name: "",
        email: "",
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    onHandleRegister() {
      console.log(this.formUser);
      const formData = new FormData();
      formData.append("name", this.formUser.name);
      formData.append("email", this.formUser.email);
      formData.append("phone", this.formUser.phone);
      formData.append("password", this.formUser.password);
    },
  },
};
</script>
