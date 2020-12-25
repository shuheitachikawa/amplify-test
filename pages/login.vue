<template>
  <Auth />
</template>

<script>
import Auth from "@/components/Auth";
import "@aws-amplify/ui-vue";
// import { onAuthUIStateChange } from '@aws-amplify/ui-components'
export default {
  components: {
    Auth
  }
};
</script>

<style lang="scss" scoped></style>
