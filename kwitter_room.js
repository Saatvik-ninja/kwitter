
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDtaPywi5ocIu6arZMwR3O6jVIAKFYZNGI",
      authDomain: "kwitter-4d37e.firebaseapp.com",
      projectId: "kwitter-4d37e",
      storageBucket: "kwitter-4d37e.appspot.com",
      messagingSenderId: "164487147852",
      appId: "1:164487147852:web:94d75ca754dbef70f49fe9",
      measurementId: "G-RPNHNDPWPB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
