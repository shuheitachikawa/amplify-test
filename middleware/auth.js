// import { Auth } from "aws-amplify";
// import { withSSRContext } from "aws-amplify";

// export default async function ({ route, redirect }) {
//   const user = await Auth.currentAuthenticatedUser()
//     .then((res) => {
//       console.log(res)
//       return res.username
//     })
//     .catch(() => {
//       return ''
//     })
//   if (!user) {
//     if (route.path.split('/')[1] !== 'login') {
//       return redirect('/login')
//     }
//   }
// }
