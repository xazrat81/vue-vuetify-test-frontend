<template>
  <tr>
    <td>{{ product.artnumber }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.brand }}</td>
    <td>{{ weight }}</td>
    <td>{{ quantity }}</td>
    <td>{{ price }}</td>
    <td>{{ product.stock }}</td>
    <td>
      <v-btn 
        text 
        color="grey"
        @click="openEditProductDialog"
      >
        <v-icon>{{ svgIcons.mdiPencil }}</v-icon>
      </v-btn>
    </td>

    <v-dialog v-model="editProductDialog">
      <create-or-edit-product
        :product="product"
        action="edit"
        @onDialogClose="closeEditProductDialog"
        @onProductEdit="saveEditedProduct"
      ></create-or-edit-product>
    </v-dialog>

  </tr>
</template>

<script>
import CreateOrEditProduct from '@/components/CreateOrEditProduct.vue'
import { mdiPencil } from '@mdi/js'
import { stringToNumRuLocale } from '@/utils/locale'

export default {

  components: {
    CreateOrEditProduct
  },

  props: {
    product: {
      type: Object
    }
  },

  data: () => ({
    editProductDialog: false,
    svgIcons: {
      mdiPencil
    }
  }),

  computed: {
    weight() {
      return stringToNumRuLocale(this.product.weight)
    },
    price() {
      return stringToNumRuLocale(this.product.price)
    },
    quantity() {
      return stringToNumRuLocale(this.product.quantity)
    }
  },

  methods: {
    openEditProductDialog() {
      this.editProductDialog = true
    },
    closeEditProductDialog() {
      this.editProductDialog = false
    },
    saveEditedProduct(product) {
      this.closeEditProductDialog()
      this.$emit('onProductEdit', product)
    }
  }

}
</script>