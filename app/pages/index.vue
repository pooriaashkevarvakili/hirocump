


<template>
  <div dir="rtl" class="p-6 bg-gray-50 min-h-screen flex gap-6">
    <Filter @search="handleSearch" @sort="handleSort" @category="handleCategory"/>
    
    <div class="flex-1 space-y-4">
      <div class="bg-white text-black p-4 rounded-lg shadow-md">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <span class="font-bold">فیلترهای اعمال شده:</span>
          
         
          <div v-if="appliedFilters.length > 0" class="flex flex-wrap gap-2">
            <div v-for="filter in appliedFilters" :key="filter" class="badge badge-lg badge-primary gap-1">
              {{ filter }}
              <button @click="removeFilter(filter)" class="text-red-500 font-bold">×</button>
            </div>
          </div>
          
          <button 
            v-if="appliedFilters.length > 0"
            @click="clearFilters" 
            class="btn btn-sm btn-outline btn-error">
            حذف همه
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="card h-[400px] bg-white shadow-md rounded-lg overflow-hidden"
        >
          <figure class="h-48">
            <img :src="product.image" :alt="product.title" class="w-full h-full object-contain"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title text-sm md:text-base">{{ product.title }}</h2>
            <div class="card-actions justify-start mt-2">
              <NuxtLink
                :to="`/products/${product.id}`"
                class="btn btn-outline btn-sm text-pink-500"
              >
                مشاهده جزئیات
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProducts } from '~/composables/useProducts'
import Filter from '../componets/Filter'
const { 
  products, 
  fetchProducts, 
  appliedFilters,    
  removeFilter,      
  clearFilters       
} = useProducts()
let currentCategory = null
let currentSortType = null  

const handleSearch = (query) => {
  fetchProducts(query.trim(), currentSortType)
}
const handleSort = (sortType) => {
currentSortType = sortType  
  const currentSearch = appliedFilters.value
    .find(f => f.startsWith('جستجو:'))
    ?.replace('جستجو: ', '') || ''

  fetchProducts(currentSearch, sortType)
}
const handleCategory = (category) => {
  currentCategory = category  

  const currentSearch = appliedFilters.value
    .find(f => f.startsWith('جستجو:'))
    ?.replace('جستجو: ', '') || ''

  fetchProducts(currentSearch, currentSortType, category)
}
onMounted(() => {
  fetchProducts('')
})
</script>