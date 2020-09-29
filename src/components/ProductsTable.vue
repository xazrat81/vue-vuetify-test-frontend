<template>
  <v-data-table
    :items="productCollection"
    :headers="goodsTableHeaders"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-btn
          color="success"
          @click="openEditProductDialog"
        >
          <v-icon left>{{ svgIcons.mdiPlus }}</v-icon>
          Создать новый товар
        </v-btn>
        <v-dialog v-model="editProductDialog">

          <create-or-edit-product
            action="create"
            @onDialogClose="closeEditProductDialog"
            @onProductCreate="saveCreatedProduct"
          ></create-or-edit-product>
          
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item="{item}">
      <products-table-row
        :product="item"
        @onProductEdit="saveEditedProduct"
      ></products-table-row>
    </template>
  </v-data-table>
</template>

<script>
import data from '@/assets/data.json'
import { mdiPlus } from '@mdi/js'
import CreateOrEditProduct from '@/components/CreateOrEditProduct.vue'
import ProductsTableRow from '@/components/ProductsTableRow.vue'

export default {

  components: {
    CreateOrEditProduct,
    ProductsTableRow
  },

  data: () => ({
    
    goodsTableHeaders: [
      { value: 'artnumber', text: 'Артикул' },
      { value: 'name', text: 'Название' },
      { value: 'brand', text: 'Бренд' },
      { value: 'weight', text: 'Масса' },
      { value: 'quantity', text: 'Количество' },
      { value: 'price', text: 'Стоимость' },
      { value: 'stock', text: 'Cток' },
      { value: 'actions', text: 'Действия' },
    ],
    
    productCollection: data,

    svgIcons: {
      mdiPlus
    },

    editProductDialog: false,

  }),

  methods: {
    openEditProductDialog() {
      this.editProductDialog = true
    },
    closeEditProductDialog() {
      this.editProductDialog = false
    },
    saveEditedProduct(product) {
      const match = this.productCollection.indexOf(element => element.artnumber === product.artnumber)
      if(match !== -1) {
        this.productCollection.splice(match, 1, Object.assign({}, product))
      }
    },
    saveCreatedProduct(product) {
      this.productCollection.push(product)
      this.closeEditProductDialog()
    }
  }
}
</script>