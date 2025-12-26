<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div v-if="loading" class="text-center py-10">در حال بارگذاری...</div>
    <div v-else-if="error" class="text-red-500 text-center py-10">{{ error }}</div>
    <div v-else-if="!product" class="text-center py-10">محصول یافت نشد</div>

    <div v-else>
      <div dir="rtl" class="mt-8 mb-8">
        <div
          class="rounded-2xl border border-blue-200 px-4 py-4 flex items-center justify-between"
        >
          <div class="flex items-center gap-3 text-blue-700">
            <Icon size="23px" name="solar:home-linear" />
            <Icon size="23px" name="quill:chevron-left" />

            <span class="text-black">لیست محصولات</span>
            <Icon size="23px" name="quill:chevron-left" />
            <div class="text-black">
              {{ categoryMap[product.category] || product.category }}
            </div>
          </div>

          <div class="text-blue-800 font-semibold text-lg"></div>
        </div>
      </div>

      <div class="card w-full bg-base-100 shadow-xl">
        <div class="flex items-center justify-center py-4">
          <h2 class="card-title text-center text-2xl">{{ product.title }}</h2>
        </div>
        <figure>
          <img
            :src="product.image"
            alt="عکس محصول"
            class="w-full h-64 object-contain bg-white"
          />
        </figure>
        <div class="card-body"></div>
      </div>

      <div
        dir="rtl"
        class="bg-white rounded-2xl shadow-md px-4 py-5 mt-8 space-y-8 text-base text-gray-800"
      >
        <div class="text-2xl font-bold">مشخصات فنی:</div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            قیمت
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words"
              >{{ product.price }} تومان</span
            >
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            توضیحات
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words">{{
              product.description
            }}</span>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            دسته بندی
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words">
              {{ categoryMap[product.category] || product.category }}
            </span>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            امتیاز
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words">{{
              product.rating.rate
            }}</span>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            تعداد نظرات
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words">{{
              product.rating.count
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProducts } from "~/composables/useProducts";

const route = useRoute();
const { product, fetchProductById, loading, error, categoryMap } = useProducts();

onMounted(() => {
  fetchProductById(route.params.id);
});
</script>
