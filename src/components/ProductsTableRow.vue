<template>
  <tr>
    <td>{{ product.artnumber }}</td>
    <td v-html="name">{{ product.name }}</td>
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
      <v-btn 
        text 
        color="grey"
        @click="deleteProduct"
      >
        <v-icon>{{ svgIcons.mdiDelete }}</v-icon>
      </v-btn>
      <v-btn 
        text 
        color="grey"
        @click="showProductDetails"
      >
        <v-icon>{{ svgIcons.mdiArrowRight }}</v-icon>
      </v-btn>
    </td>

    <v-dialog max-width="1000px" v-model="editProductDialog">
      <create-or-edit-product
        :product="product"
        action="edit"
        :isOpened="editProductDialog"
        @onDialogClose="closeEditProductDialog"
      ></create-or-edit-product>
    </v-dialog>

  </tr>
</template>

<script>
import CreateOrEditProduct from '@/components/CreateOrEditProduct.vue'
import { mdiPencil, mdiDelete, mdiArrowRight } from '@mdi/js'
import { stringToNumRuLocale } from '@/utils/locale'
import { mapMutations } from 'vuex'

export default {

  components: {
    CreateOrEditProduct
  },

  props: {
    product: {
      type: Object
    },
    productsCollectionSearch: {
      type: String
    }
  },

  data: () => ({
    editProductDialog: false,
    svgIcons: {
      mdiPencil,
      mdiDelete,
      mdiArrowRight
    }
  }),

  computed: {
    name() {
      const reg = new RegExp(`${this.productsCollectionSearch}`, 'i')
      if(this.productsCollectionSearch.length) {
        return this.product.name.replace(reg, `<span class="red--text">${this.product.name.match(reg)}</span>`)
      } else return this.product.name
    },
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
    ...mapMutations(['setCurrentProduct', 'deleteProductFromCollection']),
    openEditProductDialog() {
      this.editProductDialog = true
    },
    closeEditProductDialog() {
      this.editProductDialog = false
    },
    deleteProduct() {
      if(confirm('Вы уверены, что хотите удалить данный товар?')) {
        this.deleteProductFromCollection(this.product.artnumber)
      }
    },
    showProductDetails() {
      this.setCurrentProduct(this.product)
      this.$router.push({ name: 'SingleProduct' , params: { artnumber: this.product.artnumber } })
    }
  }

}
</script>