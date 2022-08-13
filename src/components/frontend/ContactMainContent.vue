<template>
  <!-- section main content -->
  <section class="main-content">
    <div class="container-xl">
      <div class="row">
        <div class="col-md-4">
          <!-- contact info item -->
          <div class="contact-item bordered rounded d-flex align-items-center">
            <span class="icon icon-phone"></span>
            <div class="details">
              <h3 class="mb-0 mt-0">Số điện thoại</h3>
              <p class="mb-0">+84-373245002</p>
            </div>
          </div>
          <div class="spacer d-md-none d-lg-none" data-height="30"></div>
        </div>

        <div class="col-md-4">
          <!-- contact info item -->
          <div class="contact-item bordered rounded d-flex align-items-center">
            <span class="icon icon-envelope-open"></span>
            <div class="details">
              <h3 class="mb-0 mt-0">E-Mail</h3>
              <p class="mb-0">maomao@gmail.com</p>
            </div>
          </div>
          <div class="spacer d-md-none d-lg-none" data-height="30"></div>
        </div>

        <div class="col-md-4">
          <!-- contact info item -->
          <div class="contact-item bordered rounded d-flex align-items-center">
            <span class="icon icon-map"></span>
            <div class="details">
              <h3 class="mb-0 mt-0">Địa chỉ</h3>
              <p class="mb-0">Ngũ Hành Sơn, Đà Nẵng</p>
            </div>
          </div>
        </div>
      </div>

      <div class="spacer" data-height="50"></div>

      <!-- section header -->
      <div class="section-header">
        <h3 class="section-title">Gửi tin cho chúng tôi</h3>
        <img src="@/assets/images/wave.svg" class="wave" alt="wave" />
      </div>

      <!-- Contact Form -->
      <form id="contact-form" class="contact-form" method="post">
        <div class="messages"></div>

        <div class="row">
          <div class="column col-md-6">
            <!-- Name input -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="InputName"
                id="InputName"
                placeholder="Tên của bạn"
                required="required"
                data-error="Name is required."
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>

          <div class="column col-md-6">
            <!-- Email input -->
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="InputEmail"
                name="InputEmail"
                placeholder="Email"
                required="required"
                data-error="Email is required."
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>

          <div class="column col-md-12">
            <!-- Email input -->
            <div class="form-group">
              <input
                type="file"
                multiple
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                data-error=""
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>

          <div class="column col-md-12">
            <!-- Email input -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputSubject"
                name="InputSubject"
                placeholder="Tiêu đề"
                required="required"
                data-error="Subject is required."
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>

          <div class="column col-md-12">
            <!-- Message textarea -->
            <div class="form-group">
              <textarea
                name="InputMessage"
                id="InputMessage"
                class="form-control"
                rows="4"
                placeholder="Tin nhắn của bạn..."
                required="required"
                data-error="Message is required."
              ></textarea>
              <div class="help-block with-errors"></div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          name="submit"
          id="submit"
          value="Submit"
          class="btn btn-default"
        >
          Submit Message</button
        ><!-- Send Button -->
      </form>
      <!-- Contact Form end -->
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactMainContent",
};
</script>

<style></style>
