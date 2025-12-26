<template>
  <div dir="rtl" class="p-6 bg-gray-50 min-h-screen flex gap-6">
    <Filter @search="handleSearch" @sort="handleSort" @category="handleCategory" />

    <div class="flex-1 space-y-4">
      <div class="bg-white text-black p-4 rounded-lg shadow-md">
        <div class="flex items-center justify-between flex-wrap gap-4">
          <span class="font-bold">فیلترهای اعمال شده:</span>

          <div class="flex flex-wrap items-center gap-4">
            <div v-if="appliedFilters.length > 0" class="flex flex-wrap gap-2">
              <div
                v-for="filter in appliedFilters"
                :key="filter"
                class="red-secondary inline-flex items-center gap-1 px-3 h-[32px] rounded-md max-w-full"
              >
                <Icon size="20px" name="ic:baseline-search" />

                <span class="truncate max-w-[200px]">
                  {{ filter }}
                </span>

                <button @click="removeFilter(filter)" class="text-red-500 font-bold">
                  <Icon size="20px" name="mingcute:close-medium-fill" />
                </button>
              </div>
            </div>

            <button
              v-if="appliedFilters.length > 0"
              @click="clearFilters"
              class="red-secondary w-[110px] flex items-center gap-2 h-[32px] rounded-lg btn-outline text-black shrink-0"
            >
              <span class="relative right-[10px]">
                <span>
                  {{ resultText }}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="card h-[400px] bg-white shadow-md rounded-lg overflow-hidden"
        >
          <figure class="h-48 flex items-start justify-start">
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-full object-contain object-right-top p-10"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-sm md:text-base flex items-start justify-start">
              {{ product.title }}
            </h2>
            <div class="card-actions flex items-start justify-start mt-2">
              <NuxtLink
                :to="`/products/${product.id}`"
                class="color-red btn-sm flex gap-2"
              >
                مشاهده جزئیات
                <Icon class="color-red" size="25px" name="lsicon:left-filled" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProducts } from "~/composables/useProducts";
import Filter from "../componets/Filter";
const {
  products,
  fetchProducts,
  appliedFilters,
  removeFilter,
  clearFilters,
  resultText,
} = useProducts();
let currentCategory = null;
let currentSortType = null;

const handleSearch = (query) => {
  fetchProducts(query.trim(), currentSortType);
};
const handleSort = (sortType) => {
  currentSortType = sortType;
  const currentSearch =
    appliedFilters.value.find((f) => f.startsWith("جستجو:"))?.replace("جستجو: ", "") ||
    "";

  fetchProducts(currentSearch, sortType);
};
const handleCategory = (category) => {
  currentCategory = category;

  const currentSearch =
    appliedFilters.value.find((f) => f.startsWith(""))?.replace("", "") || "";

  fetchProducts(currentSearch, currentSortType, category);
};
onMounted(() => {
  fetchProducts("");
});
</script>
