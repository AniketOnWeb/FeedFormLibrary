import app from "firebase/app";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyBML1AirpSLDU3xsCHXy5ZdsjB_6qF_kek",
  authDomain: "feedform-d06f9.firebaseapp.com",
  databaseURL: "https://feedform-d06f9.firebaseio.com",
  projectId: "feedform-d06f9",
  storageBucket: "feedform-d06f9.appspot.com",
  messagingSenderId: "32232222252",
  appId: "1:32232222252:web:e4b5006336038cb4346b89",
  measurementId: "G-PRYGQVHN4Z",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }

  submitStory(response) {
    return app
      .firestore()
      .collection("Projects")
      .add(response)
      .then((res) => {
        console.log("Document written with ID: ", res.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  addFeedbacks(type, response) {
    return app
      .firestore()
      .collection(type)
      .add(response)
      .then((res) => {
        // console.log("Document written with ID: ", res.id);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
      });
  }
}

export default new Firebase();
