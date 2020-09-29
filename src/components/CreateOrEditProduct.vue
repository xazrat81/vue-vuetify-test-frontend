<template>
  <v-card max-width="700px">
    <v-card-title>
      Создание нового товара
    </v-card-title>
    <v-card-text>

      <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Артикул"
              v-model="product.artnumber"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Название"
              v-model="product.name"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Бренд"
              v-model="product.brand"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Масса"
              v-model="product.weight"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Количество"
              v-model="product.quantity"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Стоимость"
              v-model="product.price"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Сток"
              v-model="product.stock"
              :rules="rules.required"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-end">
              <v-btn class="mr-2" color="success" @click="saveProduct">Сохранить</v-btn>
              <v-btn color="error" @click="closeEditDialog">Отмена</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>

    </v-card-text>
  </v-card>
</template>

<script>

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
  },

  data: () => ({
    
    rules: {
      required: [value => !!value || 'Обязательное поле', ]
      // artnumber: [
      //   value => !!value || 'Обязательное поле', 
      //   // value => !this.product.artnumber === value || 'Артикул должен быть уникальным'
      // ],
      // name: [
      //   value => !!value || 'Обязательное поле', 
      //   // value => !this.product.artnumber === value || 'Артикул должен быть уникальным'
      // ],
      // brand: [
      //   value => !!value || 'Обязательное поле', 
      //   // value => !this.product.artnumber === value || 'Артикул должен быть уникальным'
      // ],
      // weight: [
      //   value => !!value || 'Обязательное поле', 
      //   // value => !this.product.artnumber === value || 'Артикул должен быть уникальным'
      // ],
      // quantity: [
      //   value => !!value || 'Обязательное поле', 
      //   // value => !this.product.artnumber === value || 'Артикул должен быть уникальным'
      // ],
      // price: [
      //   value => !!value || 'Обязательное поле', 
      //   // value => !this.product.artnumber === value || 'Артикул должен быть уникальным'
      // ],
      // stock: [
      //   value => !!value || 'Обязательное поле', 
      //   // value => !this.product.artnumber === value || 'Артикул должен быть уникальным'
      // ]
    }

  }),

  methods: {
    closeEditDialog() {
      this.$emit('onDialogClose')
    },
    saveProduct() {
      switch(this.action) {
        case 'edit':
          this.$emit('onProductEdit', this.product)
          break
        case 'create':
          this.$emit('onProductCreate', this.product)
          break
      }
    }
  }

}

</script>