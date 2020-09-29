<template>
  <v-data-table
    :items="productCollection"
    :headers="goodsTableHeaders"
    :search="productsCollectionSearch"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-btn
          color="success"
          class="mr-10"
          @click="openEditProductDialog"
        >
          <v-icon left>{{ svgIcons.mdiPlus }}</v-icon>
          Создать новый товар
        </v-btn>
        <v-text-field
          v-model="productsCollectionSearch"
          label="Поиск по товарам"
          hide-details
        ></v-text-field>
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
        :productsCollectionSearch="productsCollectionSearch"
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
      { value: 'artnumber', text: 'Артикул', filterable: false },
      { value: 'name', text: 'Название' },
      { value: 'brand', text: 'Бренд', filterable: false },
      { value: 'weight', text: 'Масса', filterable: false },
      { value: 'quantity', text: 'Количество', filterable: false },
      { value: 'price', text: 'Стоимость', filterable: false },
      { value: 'stock', text: 'Cток', filterable: false },
      { value: 'actions', text: 'Действия', filterable: false },
    ],
    
    productCollection: data,

    svgIcons: {
      mdiPlus
    },

    editProductDialog: false,
    productsCollectionSearch: ''

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