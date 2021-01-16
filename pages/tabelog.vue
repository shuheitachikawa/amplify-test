<template>
  <div>
    <v-container>
      <v-text-field outlined label="店名" v-model="shopName"></v-text-field>
      <v-btn @click="serchShop" :loading="loading">店検索</v-btn>
      <v-list dense>
        <v-subheader>検索結果</v-subheader>
        <v-list-item-group v-model="selectedShop" color="primary">
          <v-list-item v-for="(item, i) in shopList" :key="i">
            <a :href="item.url" target="_blank">
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.place"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </a>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      shopName: "",
      shopList: [],
      selectedShop: {}
    };
  },
  methods: {
    async serchShop() {
      this.shopList = [];
      this.loading = true;
      const { data } = await axios.get(
        `https://fcxn3lpo88.execute-api.ap-northeast-1.amazonaws.com/default/GetShopNameFromTabelog?name=${this.shopName}`
      );
      this.shopList.push(...data);
      console.log(this.shopList);
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
