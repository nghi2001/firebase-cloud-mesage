import {initializeApp} from "firebase/app"
import {getMessaging,getToken, onMessage} from "firebase/messaging"

const firebaseConfig = {
    apiKey: "AIzaSyAK-ASn55k_gyFSgARhkhGw9n_-p08mbo0",
    authDomain: "baove-8228a.firebaseapp.com",
    databaseURL: "https://baove-8228a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "baove-8228a",
    storageBucket: "baove-8228a.appspot.com",
    messagingSenderId: "838502064282",
    appId: "1:838502064282:web:29f98b3a9e68780c6d3f23",
    measurementId: "G-X5VH2CMXJ6"
  };
  const app = initializeApp(firebaseConfig)
  const message = getMessaging(app)
  
  function requestPermission() {
      console.log("Request Permission");
      Notification.requestPermission().then((permission) => {
          console.log("Permission was granted");
          getToken(message, {vapidKey: "BCNogW5l2AMhHN2aYyZaeJxzyVuSqU2SR2LiHIYCFq0FNTQcxfZCmOCJPuKLrKcak0rkjh2mn_99aUfkdr1Vgyg"})
          .then(token => {
              console.log("Current TOken: ",token);
              onMessage(message,(payload) => {
                console.log(payload.data);
              })
            })
        })
}
export {
    requestPermission
}