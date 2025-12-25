<template>
  <div class="flex flex-col">
    <div class="w-72 h-40 bg-white p-4 rounded-lg shadow-md flex-shrink-0 space-y-4">
      <div>
        <h3 class="font-semibold mb-2">فیلتر و جستجو</h3>
        <input
          @keyup.enter="emitSearch"
          v-model="searchQuery"
          type="text"
          placeholder="جستجو..."
          class="input input-bordered w-full text-sm"
        />
        <button
          @click="emitSearch"
          class="btn bg-[#E20054] text-white text-lg w-full mt-2 btn-sm"
        >
          جستجو
        </button>
      </div>
    </div>
    <div class="w-72 mt-5 bg-white p-4 rounded-lg shadow-md flex-shrink-0 space-y-4">
      <div class="collapse collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title font-medium text-md">مرتب‌سازی</div>
        <div class="collapse-content space-y-2">
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="price-high"
              v-model="selectedSort"
              class="radio radio-primary"
            />
            قیمت: زیاد به کم
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="rating-low"
              v-model="selectedSort"
              class="radio radio-primary"
            />
            امتیاز: کم به زیاد
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sort"
              value="rating-high"
              v-model="selectedSort"
              class="radio radio-primary"
            />
            امتیاز: زیاد به کم
          </label>
        </div>
      </div>
    </div>
    <div class="w-72 mt-5 bg-white p-4 rounded-lg shadow-md">
      <div class="collapse collapse-arrow">
        <input type="checkbox" />
        <div class="collapse-title font-medium">دسته‌بندی</div>
        <div class="collapse-content space-y-3 pt-4">
          <!-- هر دسته با تعداد -->
          <label
            v-for="cat in categories"
            :key="cat"
            class="flex items-center justify-between cursor-pointer"
          >
            <div class="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                :value="cat"
                v-model="selectedCategory"
                class="radio radio-primary"
              />
              <span>{{ formatCategory(cat) }}</span>
            </div>
            <span class="text-sm text-gray-500">({{ categoryCounts[cat] || 0 }})</span>
          </label>

          <!-- گزینه همه محصولات -->
          <label class="flex items-center justify-between cursor-pointer text-gray-500">
            <div class="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                value=""
                v-model="selectedCategory"
                class="radio"
              />
              <span>همه محصولات</span>
            </div>
            <span class="text-sm">({{ totalProductsCount }})</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useProducts } from "~/composables/useProducts";

const { categoryCounts, totalProductsCount } = useProducts();

const searchQuery = ref("");
const selectedSort = ref("");
const selectedCategory = ref("");

const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const formatCategory = (cat) => {
  const map = {
    "men's clothing": "پوشاک مردانه",
    "women's clothing": "پوشاک زنانه",
    jewelery: "جواهرات",
    electronics: "الکترونیک",
  };
  return map[cat] || cat;
};

const emit = defineEmits(["search", "sort", "category"]);

const emitSearch = () => {
  emit("search", searchQuery.value.trim());
};

watch(selectedSort, (newVal) => {
  emit("sort", newVal || null);
});

watch(selectedCategory, (newVal) => {
  emit("category", newVal || null);
});
</script>
