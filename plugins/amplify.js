import Vue from 'vue'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import awsExports from '@/src/aws-exports'

// Amplify.configure(awsExports)
Amplify.configure({ ...awsExports, ssr: true })
Vue.use(Amplify)
