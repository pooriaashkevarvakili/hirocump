<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="-1"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <div class="flex gap-2 justify-end items-center">
              <span>تماس با ما</span>
              <Icon size="23px" name="material-symbols:phone-enabled-sharp" />
            </div>
          </li>
          <li>
            <div class="flex gap-2 justify-end items-center">
              <span>سوالات متداول</span>
              <Icon size="23px" name="material-symbols:shield-question-outline" />
            </div>
          </li>
          <li>
            <div class="flex gap-2 justify-end items-center">
              <span>دریافت مشاوره</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70001 1.68669L2.68668 4.30669C1.40001 5.14669 1.40001 7.02669 2.68668 7.86669L6.70001 10.4867C7.42001 10.96 8.60668 10.96 9.32668 10.4867L13.32 7.86669C14.6 7.02669 14.6 5.15336 13.32 4.31336L9.32668 1.69336C8.60668 1.21336 7.42001 1.21336 6.70001 1.68669Z"
                  stroke="#0A2A51"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.75325 8.71997L3.74658 11.8466C3.74658 12.6933 4.39992 13.6 5.19992 13.8666L7.32658 14.5733C7.69325 14.6933 8.29992 14.6933 8.67325 14.5733L10.7999 13.8666C11.5999 13.6 12.2532 12.6933 12.2532 11.8466V8.7533"
                  stroke="#0A2A51"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2666 10V6"
                  stroke="#0A2A51"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </li>
          <li>
            <div class="flex gap-2 justify-end items-center">
              <span>لیست محصولات</span>
              <Icon size="23px" name="solar:cup-broken" />
            </div>
          </li>
        </ul>
      </div>
      <a
        class="bg-[#E20054] w-[107px] text-center h-[40px] rounded-2xl text-white text-xl flex items-center gap-6"
      >
        <div class="relative right-[-10px] flex items-center">
          <Icon size="23px" name="mynaui:telephone-solid" />
        </div>

        تماس
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <div class="flex gap-2">
            <span>تماس با ما</span>
            <Icon size="23px" name="material-symbols:phone-enabled-sharp" />
          </div>
        </li>
        <li>
          <div class="flex gap-2">
            <span> سوالات متداول</span>
            <Icon size="23px" name="material-symbols:shield-question-outline" />
          </div>
        </li>
        <li>
          <div class="flex gap-2">
            <span>دریافت مشاوره</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70001 1.68669L2.68668 4.30669C1.40001 5.14669 1.40001 7.02669 2.68668 7.86669L6.70001 10.4867C7.42001 10.96 8.60668 10.96 9.32668 10.4867L13.32 7.86669C14.6 7.02669 14.6 5.15336 13.32 4.31336L9.32668 1.69336C8.60668 1.21336 7.42001 1.21336 6.70001 1.68669Z"
                stroke="#0A2A51"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.75325 8.71997L3.74658 11.8466C3.74658 12.6933 4.39992 13.6 5.19992 13.8666L7.32658 14.5733C7.69325 14.6933 8.29992 14.6933 8.67325 14.5733L10.7999 13.8666C11.5999 13.6 12.2532 12.6933 12.2532 11.8466V8.7533"
                stroke="#0A2A51"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.2666 10V6"
                stroke="#0A2A51"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
        <li>
          <div class="flex gap-2">
            <span>لیست محصولات</span>
            <Icon size="23px" name="solar:cup-broken" />
          </div>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class=""></a>
    </div>
  </div>
  <NuxtPage />
  <Footer />
</template>

<script setup>
import Footer from "./footer";
</script>
