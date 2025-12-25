import { ref } from 'vue'

export const useProducts = () => {
  const products = ref([])
  const product = ref(null)
  const loading = ref(false)
  const error = ref(null)
  const appliedFilters = ref([])

  const sortOptions = {
    'price-low': { key: 'price', order: 'asc', label: 'قیمت: کم به زیاد' },
    'price-high': { key: 'price', order: 'desc', label: 'قیمت: زیاد به کم' },
    'rating-low': { key: 'rating.rate', order: 'asc', label: 'امتیاز: کم به زیاد' },
    'rating-high': { key: 'rating.rate', order: 'desc', label: 'امتیاز: زیاد به کم' },
  }

  const categoryMap = {
    "men's clothing": "پوشاک مردانه",
    "women's clothing": "پوشاک زنانه",
    "jewelery": "جواهرات",
    "electronics": "الکترونیک"
  }

  const getCategoryEn = (faName) => {
    return Object.keys(categoryMap).find(key => categoryMap[key] === faName) || null
  }

  const getCategoryFa = (enName) => {
    return categoryMap[enName] || enName
  }

 
  const categoryCounts = {
    "men's clothing": 5,
    "women's clothing": 6,
    "jewelery": 4,
    "electronics": 5
  }

  const totalProductsCount = 20

  const fetchProducts = async (searchQuery = '', sortType = null, category = null) => {
    loading.value = true
    error.value = null

    try {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error(`API error: ${res.status}`)
      let data = await res.json()

      if (category && categoryMap[category]) {
        data = data.filter(p => p.category === category)

        appliedFilters.value = appliedFilters.value.filter(f => !f.startsWith('دسته:'))
        appliedFilters.value.push(`دسته: ${getCategoryFa(category)}`)
      } else {
        appliedFilters.value = appliedFilters.value.filter(f => !f.startsWith('دسته:'))
      }

  
      if (searchQuery && searchQuery.trim() !== '') {
        const query = searchQuery.trim().toLowerCase()
        data = data.filter(p => p.title.toLowerCase().includes(query))

        appliedFilters.value = appliedFilters.value.filter(f => !f.startsWith('جستجو:'))
        appliedFilters.value.push(`جستجو: ${searchQuery.trim()}`)
      } else {
        appliedFilters.value = appliedFilters.value.filter(f => !f.startsWith('جستجو:'))
      }

      if (sortType && sortOptions[sortType]) {
        const { key, order } = sortOptions[sortType]
        const keys = key.split('.')

        const getValue = (obj, path) => {
          return path.reduce((val, k) => (val && val[k] !== undefined ? val[k] : undefined), obj)
        }

        data.sort((a, b) => {
          const aVal = getValue(a, keys)
          const bVal = getValue(b, keys)

          if (aVal === undefined && bVal === undefined) return 0
          if (aVal === undefined) return 1
          if (bVal === undefined) return -1

          return order === 'asc'
            ? (aVal > bVal ? 1 : -1)
            : (aVal < bVal ? 1 : -1)
        })

        appliedFilters.value = appliedFilters.value.filter(f => !f.startsWith('مرتب:'))
        appliedFilters.value.push(`مرتب: ${sortOptions[sortType].label}`)
      } else {
        appliedFilters.value = appliedFilters.value.filter(f => !f.startsWith('مرتب:'))
      }

      products.value = data
    } catch (err) {
      error.value = err.message || 'خطای نامشخص در دریافت محصولات'
      products.value = []
    } finally {
      loading.value = false
    }
  }

  const fetchProductById = async (id) => {
    if (!id) return
    loading.value = true
    error.value = null
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      if (!res.ok) throw new Error(`API error: ${res.status}`)
      product.value = await res.json()
    } catch (err) {
      error.value = err.message || 'خطای نامشخص'
      product.value = null
    } finally {
      loading.value = false
    }
  }

  const removeFilter = (filter) => {
    appliedFilters.value = appliedFilters.value.filter(f => f !== filter)

    const searchFilter = appliedFilters.value.find(f => f.startsWith('جستجو:'))
    const sortFilter = appliedFilters.value.find(f => f.startsWith('مرتب:'))
    const categoryFilter = appliedFilters.value.find(f => f.startsWith('دسته:'))

    const currentSearch = searchFilter ? searchFilter.replace('جستجو: ', '') : ''
    
    let currentSortType = null
    if (sortFilter) {
      const label = sortFilter.replace('مرتب: ', '')
      currentSortType = Object.keys(sortOptions).find(key => sortOptions[key].label === label) || null
    }

    let currentCategory = null
    if (categoryFilter) {
      const faName = categoryFilter.replace('دسته: ', '')
      currentCategory = getCategoryEn(faName)
    }

    fetchProducts(currentSearch, currentSortType, currentCategory)
  }

  const clearFilters = () => {
    appliedFilters.value = []
    fetchProducts('')
  }
  return {
    products,
    product,
    loading,
    error,
    appliedFilters,
    fetchProducts,
    fetchProductById,
    removeFilter,
    clearFilters,
    categoryCounts,
    totalProductsCount,
    categoryMap 
  }
}