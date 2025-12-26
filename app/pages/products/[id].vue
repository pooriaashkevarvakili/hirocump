<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div v-if="loading" class="text-center py-10">در حال بارگذاری...</div>
    <div v-else-if="error" class="text-red-500 text-center py-10">{{ error }}</div>
    <div v-else-if="product">
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="flex items-center justify-center">
          <h2 class="card-title text-center">{{ product.title }}</h2>
        </div>
        <figure>
          <img
            :src="product.image"
            alt="product image"
            class="w-full h-48 object-contain"
          />
        </figure>
        <div class="card-body"></div>
      </div>

      <div
        dir="rtl"
        class="bg-white rounded-2xl shadow-md px-4 py-5 mt-8 space-y-8 text-base text-gray-800"
      >
        <div class=" text-2xl font-bold" dir="rtl">مشخصات فنی:</div>

        <!-- قیمت -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            قیمت
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words">{{ product.price }}</span>
          </div>
        </div>

        <!-- توضیحات -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            توضیحات
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words">{{ product.description }}</span>
          </div>
        </div>

        <!-- دسته بندی -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            دسته بندی
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words">{{ product.category }}</span>
          </div>
        </div>

        <!-- امتیاز -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            امتیاز
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words">{{ product.rating.rate }}</span>
          </div>
        </div>

        <!-- تعداد -->
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
          <div
            class="flex items-center justify-center px-6 py-3 bg-gray-300 text-black font-bold text-lg rounded-full w-full md:w-auto"
          >
            تعداد
          </div>
          <div
            class="flex-1 min-h-24 bg-gray-300 rounded-2xl p-6 border border-gray-200 overflow-auto w-full"
          >
            <span class="text-2xl font-bold text-gray-800 break-words">{{ product.rating?.count }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-10">محصول یافت نشد</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProducts } from "~/composables/useProducts";

const route = useRoute();
const { product, fetchProductById, loading, error } = useProducts();

onMounted(() => {
  fetchProductById(route.params.id);
});
</script>
