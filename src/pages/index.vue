<template>
  <div class="container">
    <h1>Latest Products</h1>
    <hr />
    <p v-if="error" class="error">{{ error }}</p>
    <div class="product-container">
      <div
        v-for="(product, index) in products"
        :key="product.id"
        :item="product"
        :index="index"
        class="product"
      >
        <p class="title">{{ product.name }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import PostService from '../PostService'

export default Vue.extend({
  name: 'Products',
  data() {
    return {
      products: [],
      error: ''
    }
  },
  async created() {
    try {
      this.products = await PostService.getPosts()
    } catch (e) {
      this.error = e.message
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 80vw;
}
</style>
