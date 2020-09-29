<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="8">

        <h1 class=" mt-10 mb-10 text-h2">Список товаров</h1>
        <products-table></products-table>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsTable from '@/components/ProductsTable.vue'

export default {

  components: {
    ProductsTable
  },
}
</script>
