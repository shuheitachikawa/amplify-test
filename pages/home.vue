<template>
  <div>
    ホーム
    <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item.name }} - {{ item.description }}
      </li>
    </ul>
    <v-text-field label="Todoタイトル" v-model="name"></v-text-field>
    <v-text-field label="Todo本文" v-model="description"></v-text-field>
    <v-btn @click="post">追加</v-btn>
    <v-divider class="mt-10"></v-divider>
    <v-text-field label="HotelMasterId" v-model="hotelMasterId"></v-text-field>
    <v-btn @click="postHotel">ホテル追加</v-btn>
    <v-btn @click="get">ホテル取得</v-btn>
    <v-divider class="mt-10"></v-divider>
    <v-text-field label="店名" v-model="shopName"></v-text-field>
    <v-btn @click="serchShop">店検索</v-btn>
  </div>
</template>

<script>
import axios from "axios";
import { withSSRContext, graphql, API, graphqlOperation } from "aws-amplify";
import {
  listTodos,
  rcUserGroupHotelByHotelMasterId
} from "@/src/graphql/queries";
import { createTodo, createRcUserGroupHotel } from "@/src/graphql/mutations";
export default {
  async asyncData(context) {
    const { API } = withSSRContext(context);
    const { data } = await API.graphql(graphqlOperation(listTodos));
    console.log(data);
    console.log(process.browser);
    return {
      todos: data.listTodos.items
    };
  },
  created() {},
  data() {
    return {
      todos: [],
      name: "",
      description: "",
      hotelMasterId: "11827",
      shopName: ""
    };
  },
  methods: {
    async serchShop() {
      const { data } = await axios.get(
        `https://fcxn3lpo88.execute-api.ap-northeast-1.amazonaws.com/default/GetShopNameFromTabelog?name=${this.shopName}`
      );
      console.log(data);
    },
    async post() {
      const input = {
        name: this.name,
        description: this.description
      };
      await API.graphql(graphqlOperation(createTodo, { input }));
    },
    async postHotel() {
      const input = {
        hotelMasterId: this.hotelMasterId
      };
      await API.graphql(graphqlOperation(createRcUserGroupHotel, { input }));
    },
    async get() {
      const { data } = await API.graphql({
        query: rcUserGroupHotelByHotelMasterId,
        variables: {
          hotelMasterId: this.hotelMasterId
        }
      });
    }
  }
  //   head() {
  //     return {
  //       title: this.todos[0],
  //       meta: [
  //         //{ name: 'description', content: this.text },

  //         //{ property: 'og:type', content: 'website' },
  //         { property: "og:title", content: this.todos[0].id },
  //         { property: "og:description", content: this.todos[0] },
  //         //{ property: 'og:url', content: 'https://bubekiti.com' },
  //         //{ property: 'og:site_name', content: 'Bubekiti Web creating' },
  //         // { property: 'og:image', content: this.image },

  //         //{ property: 'fb:app_id', content: '591933487923354' },

  //         { name: "twitter:card", content: "summary_large_image" },
  //         { name: "twitter:site", content: "@bubekiti" },
  //         { name: "twitter:domain", content: "bubekiti.com" },
  //         { name: "twitter:title", content: this.todos[0].id },
  //         {
  //           name: "twitter:description",
  //           content:
  //             "神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。"
  //         }
  //         // { property: 'twitter:image', content: this.image },
  //       ]
  //     };
  //   }
};
</script>

<style lang="scss" scoped></style>
