<template>
  <v-card>
    <v-card-title>
      Создание нового товара
    </v-card-title>
    <v-card-text>

      <form @submit.prevent="saveProduct">
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Артикул"
                v-model="productModel.artnumber"
                :rules="rules.required"
                :disabled="action === 'edit'"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Название"
                v-model="productModel.name"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Бренд"
                v-model="productModel.brand"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Масса"
                v-model="productModel.weight"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Количество"
                v-model="productModel.quantity"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Стоимость"
                v-model="productModel.price"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Сток"
                v-model="productModel.stock"
                :rules="rules.required"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <div class="d-flex justify-end">
                <v-btn 
                  type="submit" 
                  class="mr-2" 
                  color="success" 
                  @click="saveProduct"
                >Сохранить</v-btn>
                <v-btn 
                  color="error" 
                  @click="closeEditDialog"
                >Отмена</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </form>

    </v-card-text>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

  props: {
    product: {
      type: Object,
      required: false,
      default: () => ({
        artnumber: '',
        name: '',
        brand: '',
        weight: '',
        quantity: '',
        price: '',
        stock: ''
      })
    },
    action: {
      type: String,
      required: true
    },
    isOpened: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({

    productModel: {},
    
    rules: {
      required: [value => !!value || 'Обязательное поле']
    }

  }),

  watch: {
    isOpened: function() {
      if(this.isOpened) this.productModel = Object.assign({}, this.product)
    }
  },

  methods: {
    ...mapMutations(['saveEditedProduct', 'saveCreatedProduct']),
    closeEditDialog() {
      this.$emit('onDialogClose')
    },
    saveProduct() {
      switch(this.action) {
        case 'edit':
          this.saveEditedProduct(this.productModel)
          this.closeEditDialog()
          break
        case 'create':
          this.saveCreatedProduct(this.productModel)
          this.closeEditDialog()
          break
      }
    }
  },

  mounted() {
    if(this.isOpened) this.productModel = Object.assign({}, this.product)
  }

}

</script>