<template>
  <v-data-table
    :items="productsCollection"
    :headers="productsTableHeaders"
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
        <v-dialog max-width="1000px" v-model="editProductDialog">

          <create-or-edit-product
            action="create"
            :isOpened="editProductDialog"
            @onDialogClose="closeEditProductDialog"
          ></create-or-edit-product>
          
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item="{item}">
      <products-table-row
        :product="item"
        :productsCollectionSearch="productsCollectionSearch"
      ></products-table-row>
    </template>
  </v-data-table>
</template>

<script>
import { mdiPlus } from '@mdi/js'
import CreateOrEditProduct from '@/components/CreateOrEditProduct.vue'
import ProductsTableRow from '@/components/ProductsTableRow.vue'
import { mapGetters } from 'vuex'

export default {

  components: {
    CreateOrEditProduct,
    ProductsTableRow
  },

  data: () => ({
    
    productsTableHeaders: [
      { value: 'artnumber', text: 'Артикул', filterable: false },
      { value: 'name', text: 'Название' },
      { value: 'brand', text: 'Бренд', filterable: false },
      { value: 'weight', text: 'Масса', filterable: false },
      { value: 'quantity', text: 'Количество', filterable: false },
      { value: 'price', text: 'Стоимость', filterable: false },
      { value: 'stock', text: 'Cток', filterable: false },
      { value: 'actions', text: 'Действия', filterable: false },
    ],

    svgIcons: {
      mdiPlus
    },

    editProductDialog: false,
    productsCollectionSearch: ''

  }),

  computed: {
    ...mapGetters(['productsCollection'])
  },

  methods: {
    openEditProductDialog() {
      this.editProductDialog = true
    },
    closeEditProductDialog() {
      this.editProductDialog = false
    }
  }
}
</script>