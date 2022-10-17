<script setup lang="ts">
</script>

<template>
  <footer>
    <div class="container footer d-flex space-around">
      <div class="logo mobile-hide">
        <img class="brand m-b-10" src="@/assets/svg/brand-vertical.svg" />
        <div>
          © Aemi, 2022
        </div>
      </div>
      <div class="info">
        <div class="bold-title">CÔNG TY TNHH AEMI</div>
        <p>Địa chỉ: Lầu 4, Tòa nhà TSA, 22-24 Ung Văn Khiêm, Phường 25, Quận Bình Thạnh, TPHCM</p>
        <p>Hotline: 1800-646847</p>
        <p>Email: hello@aemi.vn</p>
        <p>Giấy phép ĐKKD: 0317056900 (Ngày 29 tháng 11 năm 2021, Sở KHĐT TP. HCM)</p>

        <div class="bold-title">HỖ TRỢ KHÁCH HÀNG</div>
        <p>Thông tin bảo mật</p>
        <p>Điều khoản bán hàng</p>
        <p>Chính sách hoàn trả</p>
        <p>Chính sách giao hàng</p>
        <p>Chính sách thanh toán</p>
      </div>
      <div class="social d-flex">
        <div>
          <div class="bold-title">MẠNG XÃ HỘI</div>
          <p class="d-flex align-center"><img class="m-r" src="@/assets/svg/instagram.svg" /> Instagram</p>
          <p class="d-flex align-center"><img class="m-r" src="@/assets/svg/facebook.svg" /> Facebook</p>
          <p class="d-flex align-center"><img class="m-r" src="@/assets/svg/zalo.svg" /> Zalo</p>
          <p class="d-flex align-center"><img class="m-r" src="@/assets/svg/Tiktok.svg" /> Tiktok</p>
        </div>
        <div class="grow-1" />
        <div class="logo screen-hide">
          <img class="brand m-b-10" src="@/assets/svg/brand-vertical.svg" />
          <div>
            © Aemi, 2022
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<style scoped>
footer {
  color: #fff;
  background-color: #416EC2;
  padding: 3.125rem 0;
}

.bold-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
  }

  .container {
    justify-content: space-between;
  }
}
</style>
