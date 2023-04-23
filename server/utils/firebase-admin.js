const admin = require("firebase-admin")
const serviceAccount = require("/home/nghi/Workspace/NODEJS/FCM/baove-8228a-firebase-adminsdk-giwbs-e0a8d51e41.json")
const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://baove-8228a-default-rtdb.asia-southeast1.firebasedatabase.app"
})

const registrationToken = 'eM0_8Mc56LzKJqjsoUChA0:APA91bEQQDx0wwk84tJyvjPuxUYMG2K_95zaeE7gttXxNvLZCIXGm6EgE7ggeUW-NqkYwjjYcQMqSWPwRcEGs-QT5Fcq-_d70nU-GtJgST7XpujmbV68iJz28Eycuo07dLr6NAdQeNUx';

const message = {
  data: {
    title: "Test",
    body: "Test body"
  },
  token: registrationToken
};

app.messaging()
    .send(message)
    .then((response) => {
        console.log("Success",response);
    })
    .catch(err => {
        console.log("Fail: ",err);
    })