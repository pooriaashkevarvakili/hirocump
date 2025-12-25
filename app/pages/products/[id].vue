<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div v-if="loading" class="text-center py-10">در حال بارگذاری...</div>
    <div v-else-if="error" class="text-red-500 text-center py-10">{{ error }}</div>
    <div v-else-if="product">
      <!-- تصویر محصول -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <img :src="product.image" alt="محصول" class="w-full h-80 object-contain"/>
      </div>

      <!-- عنوان و قیمت -->
      <div class="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold">{{ product.title }}</h1>
        <p class="text-xl font-semibold text-green-600">${{ product.price }}</p>
      </div>

      <!-- مشخصات فنی / توضیحات -->
      <div class="bg-white rounded-lg shadow-md p-4 space-y-4">
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">desc:</span>
          <span>{{ product.description }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">category</span>
          <span>{{ product.category }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">rank</span>
          <span>{{ product.rating?.rate || 'N/A' }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium text-gray-700">qunatity</span>
          <span>{{ product.rating?.count || 'N/A' }}</span>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-10">not found</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts } from '~/composables/useProducts'

const route = useRoute()
const { product, fetchProductById, loading, error } = useProducts()

onMounted(() => {
  fetchProductById(route.params.id)
})
</script>
