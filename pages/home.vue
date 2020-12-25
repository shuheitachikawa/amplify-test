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
    console.log(process.browser)
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
  }
};
</script>

<style lang="scss" scoped></style>
