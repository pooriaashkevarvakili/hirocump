<template>
  <footer class="footer bg-base-300 text-base-content p-10 mt-20" dir="rtl">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
      <nav class="flex flex-col gap-4 text-right">
        <h6 class="footer-title opacity-0 pointer-events-none">پشتیبانی</h6>
        <p class="text-lg leading-relaxed">هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم</p>
      </nav>
      <nav class="flex flex-col gap-4 text-right">
        <h6 class="footer-title">دسترسی سریع</h6>
        <a class="link link-hover">درباره ما</a>
        <a class="link link-hover">بلاگ</a>
        <a class="link link-hover">تماس با ما</a>
        <a class="link link-hover">خدمات پس از فروش</a>
      </nav>

      <nav class="flex flex-col gap-4 text-right">
        <h6 class="footer-title">راهنمای سایت</h6>
        <a class="link link-hover">قوانین و مقررات</a>
        <a class="link link-hover">دریافت مشاوره</a>
        <a class="link link-hover">انتقادات و پیشنهادات</a>
      </nav>

      <nav class="flex flex-col gap-4 text-right">
        <h6 class="footer-title">شبکه‌های اجتماعی</h6>
        <a class="link link-hover flex items-center gap-2">
          <Icon size="23px" name="ic:sharp-telegram" />
          <span>تلگرام</span>
        </a>
        <a class="link link-hover flex items-center gap-2">
          <Icon size="23px" name="ri:instagram-fill" />
          <span>اینستاگرام</span>
        </a>
        <a class="link link-hover flex items-center gap-2">
          <Icon size="23px" name="mingcute:linkedin-fill" />
          <span>لینکدین</span>
        </a>
      </nav>
    </div>
  </footer>
  <footer class="footer bg-white text-black items-center p-4">
    <div class="w-full flex flex-col md:flex-row items-center justify-between gap-8">
      <aside class="flex-shrink-0"></aside>

      <nav class="flex flex-col items-center justify-center gap-6">
        <div dir="rtl" class="text-sm text-center max-w-md">
          تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر گونه کپی برداری پیگرد
          قانونی دارد.
        </div>

        <div class="flex gap-6">
          <a href="#" class="text-black hover:text-gray-600 transition-colors">
            <Icon size="23px" name="ic:sharp-telegram" />
          </a>
          <a href="#" class="text-black hover:text-gray-600 transition-colors">
            <Icon size="23px" name="ri:instagram-fill" />
          </a>
          <a href="#" class="text-black hover:text-gray-600 transition-colors">
            <Icon size="23px" name="mingcute:linkedin-fill" />
          </a>
          <a href="#" class="text-black hover:text-gray-600 transition-colors">
            <Icon size="23px" name="mingcute:twitter-fill" />
          </a>
          <a href="#" class="text-black hover:text-gray-600 transition-colors">
            <Icon size="23px" name="mingcute:youtube-fill" />
          </a>
        </div>
      </nav>

      <aside class="flex-shrink-0 flex">
        <img
          class="w-[72px] h-[72px] rounded-lg object-contain"
          :src="logo1"
          alt="لوگو ۱"
        />

        <img
          class="w-[72px] h-[72px] rounded-lg object-contain"
          :src="logo2"
          alt="لوگو ۲"
        />
      </aside>
    </div>
  </footer>
</template>
<script setup>
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
</script>
<style scoped>
footer {
  direction: rtl;
  text-align: right;
}

a.text-[#E20054] {
  color: #e20054;
}
</style>
