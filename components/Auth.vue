<template>
  <div class="d-flex">
    <v-card class="elevation-6 mx-auto" max-width="344" outlined>
      <v-card-title>アカウント作成</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="email"
          required
          label="メールアドレス"
          type="email"
          name="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          required
          label="パスワード"
          name="password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="#002C81" dark @click="signup"> 作成 </v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="elevation-6 mx-auto" max-width="344" outlined>
      <v-card-title>登録確認</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="email"
          required
          label="メールアドレス"
          type="email"
          name="email"
        ></v-text-field>
        <v-text-field
          v-model="number"
          required
          label="確認コード"
          name="password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="#002C81" dark @click="confirm"> 確認 </v-btn>
      </v-card-actions>
    </v-card>

    <v-card max-width="344" class="elevation-6 mx-auto" outlined>
      <v-card-title>ログイン</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="email"
          required
          label="メールアドレス"
          type="email"
          name="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          required
          label="パスワード"
          name="password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn block color="#002C81" dark elevation="0" @click="login">
          ログイン
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-btn block color="#002C81" dark elevation="0" @click="checkLoginUser">
      ログイン確認
    </v-btn>
    <v-btn block color="red" dark elevation="0" @click="logout">
      ログアウト
    </v-btn>
  </div>
</template>

<script>
import { withSSRContext } from "aws-amplify";
import { Auth } from "aws-amplify";
export default {
  data: () => ({
    hotelId: null,
    email: "shuhei.tusx@gmail.com",
    password: "tachikawa",
    number: "",
    showPassword: false
  }),
  methods: {
    async signup() {
      const payload = {
        username: this.email,
        password: this.password
      };
      await Auth.signUp({
        // username: payload.email,
        // password: payload.password,
        // attributes: {
        //   email: payload.email
        // }
        username: this.email,
        password: this.password,
        email: this.email
      });
    },
    async confirm() {
      await Auth.confirmSignUp(this.email, this.number);
    },
    async login() {
      const payload = {
        username: this.email,
        password: this.password
      };
      try {
        await Auth.signIn(payload.username, payload.password);
        console.log("ログイン完了");
        this.$router.push("/home");
      } catch (e) {
        console.log(e);
      }
    },
    async checkLoginUser(context) {
      const { Auth } = withSSRContext({ req: context.req });
      try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
      } catch (e) {
        console.log(e);
      }
    },
    async logout() {
      try {
        await Auth.signOut();
        console.log("ログアウト完了");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
