<template>
  <section class="main-content">
    <div class="container-xl">
      <div class="spacer" data-height="50"></div>

      <!-- section header -->
      <div class="section-header">
        <h6 class="section-title">Cung cấp thông tin cá nhân</h6>
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

          <div class="column col-md-3">
            <!-- Email input -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputDate"
                name="InputDate"
                placeholder="Ngày sinh (dd/mm/yyyy)"
                required="required"
                data-error="Date is required."
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="column col-md-3">
            <!-- Email input -->
            <div class="form-group">
              <select name="selectGT" id="selectGT" class="form-control">
                <option value="">-- Giới tính --</option>
                <option value="male">Giới tính Nam</option>
                <option value="femail">Giới tính Nữ</option>
              </select>
              <div class="help-block with-errors"></div>
            </div>
          </div>

          <div class="column col-md-">
            <p>Vui lòng cung cấp ảnh CMND(mặt trước, mặt sau):</p>
          </div>
          <div class="column col-md-12">
            <!-- arnh cmnd -->
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
          <!-- ============================================================ -->
          <h6 class="section-title">Cung cấp thông tin hộ khẩu thường trú</h6>
          <div class="column col-md-3">
            <!--  Tỉnh -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Tỉnh/Thành phố"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="column col-md-3">
            <!-- Huyện -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Quận/Huyện"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="column col-md-3">
            <!-- xã input -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Phường/Thị xã"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="column col-md-3">
            <!-- xã input -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Số nhà/Thôn"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <!-- ============================================================================== -->
          <h6 class="section-title">Cung cấp thông tin tạm trú</h6>
          <div class="column col-md-4">
            <!-- Email input -->
            <div class="form-group">
              <select name="selectGT" id="selectGT" class="form-control">
                <option value="">Trường hợp (*)</option>
                <option value="male">Tạm trú trong tỉnh</option>
                <option value="femail">
                  Tạm trú từ huyện này sang huyện khác
                </option>
                <option value="femail">Tạm trú từ xã này sang xã khác</option>
              </select>
              <div class="help-block with-errors"></div>
            </div>
          </div>

          <div class="column col-md-4">
            <!-- xã input -->
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Số CMND/CCCD"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>

          <div class="column col-md-4">
            <!-- xã input -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Số điện thoại (+84)"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <!-- Thônng tin nơi chốn tạm trú -->
          <div class="column col-md-3">
            <!--  Tỉnh -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Tỉnh/Thành phố"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="column col-md-3">
            <!-- Huyện -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Quận/Huyện"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="column col-md-3">
            <!-- xã input -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Phường/Thị xã"
              />
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="column col-md-3">
            <!-- xã input -->
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="InputFIle"
                name="InputFIle"
                required="required"
                placeholder="Số nhà/Thôn"
              />
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
          Gửi thông tin</button
        ><!-- Send Button -->
      </form>
      <!-- Contact Form end -->
    </div>
  </section>
</template>

<script>
export default {
  name: "ProceduresMainContent",
};
</script>

<style>
.section-title {
  font-size: 16px;
  margin-bottom: 10px;
  /* margin: 0; */
}
</style>
