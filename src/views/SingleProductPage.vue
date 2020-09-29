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
          <v-btn color="primary" class="mr-2">Изменить</v-btn>
          <v-btn color="error">Удалить</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters(['currentProduct'])
  },

  mounted() {
    console.log(this.currentProduct)
  }

}
</script>

<style>

</style>