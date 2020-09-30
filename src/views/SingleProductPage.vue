<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="4">
        <h2 class="mb-10 mt-10 text-h2">{{ currentProduct.name }}</h2>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{{ currentProduct.artnumber }}</td>
              </tr>
              <tr>
                <td>Бренд</td>
                <td>{{ currentProduct.brand }}</td>
              </tr>
              <tr>
                <td>Стоимость</td>
                <td>{{ currentProduct.price }}</td>
              </tr>
              <tr>
                <td>Количество</td>
                <td>{{ currentProduct.quantity }}</td>
              </tr>
              <tr>
                <td>Масса</td>
                <td>{{ currentProduct.weight }}</td>
              </tr>
              <tr>
                <td>Сток</td>
                <td>{{ currentProduct.stock }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="mt-10">
          <v-btn 
            color="primary" 
            class="mr-2" 
            @click="openEditProductDialog"
          >Изменить</v-btn>
          <v-btn 
            color="error" 
            @click="deleteProduct"
          >Удалить</v-btn>
        </div>
        <v-dialog max-width="1000px" v-model="editDialog">
          <create-or-edit-product
            :product="currentProduct"
            action="edit"
            :isOpened="editDialog"
            @onDialogClose="closeEditProductDialog"
          ></create-or-edit-product>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import CreateOrEditProduct from '@/components/CreateOrEditProduct.vue'

export default {

  components: {
    CreateOrEditProduct
  },

  data: () => ({
    editDialog: false
  }),

  computed: {
    ...mapGetters(['currentProduct'])
  },

  methods: {
    ...mapMutations(['deleteProductFromCollection']),

    openEditProductDialog() {
      this.editDialog = true
    },

    closeEditProductDialog() {
      this.editDialog = false
    },

    deleteProduct() {
      this.deleteProductFromCollection(this.currentProduct.artnumber)
      this.$router.push({name: 'Goods'})
    }
  },

}
</script>

<style>

</style>