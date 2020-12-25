<template>
  <div>
    ホーム
    <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item.name }} - {{ item.description }}
      </li>
    </ul>
    <v-text-field v-model="name"></v-text-field>
    <v-text-field v-model="description"></v-text-field>
    <v-btn @click="post">追加</v-btn>
  </div>
</template>

<script>
import { withSSRContext, graphql, API, graphqlOperation } from "aws-amplify";
import { listTodos } from "@/src/graphql/queries";
import { createTodo } from "@/src/graphql/mutations";
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
  data() {
    return {
      todos: [],
      name: "",
      description: ""
    };
  },
  methods: {
    async post() {
      const input = {
        name: this.name,
        description: this.description
      };
      await API.graphql(graphqlOperation(createTodo, { input }));
    }
  },
  head() {
    return {
      title: this.todos[0].id,
      meta: [
        //{ name: 'description', content: this.text },

        //{ property: 'og:type', content: 'website' },
        { property: "og:title", content: this.todos[0].id },
        { property: "og:description", content: this.todos[0].id },
        //{ property: 'og:url', content: 'https://bubekiti.com' },
        //{ property: 'og:site_name', content: 'Bubekiti Web creating' },
        // { property: 'og:image', content: this.image },

        //{ property: 'fb:app_id', content: '591933487923354' },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@bubekiti" },
        { name: "twitter:domain", content: "bubekiti.com" },
        { name: "twitter:title", content: this.todos[0].id },
        {
          name: "twitter:description",
          content:
            "神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。"
        }
        // { property: 'twitter:image', content: this.image },
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
