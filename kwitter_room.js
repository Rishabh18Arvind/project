
const firebaseConfig = {
      apiKey: "AIzaSyDQ9LR01Rpy0CVlgMf3327qQn5aicUOSF8",
      authDomain: "project93-7fc67.firebaseapp.com",
      databaseURL: "https://project93-7fc67-default-rtdb.firebaseio.com",
      projectId: "project93-7fc67",
      storageBucket: "project93-7fc67.appspot.com",
      messagingSenderId: "235791681394",
      appId: "1:235791681394:web:05a7aa28642d0ba381ffeb"
    };
    

    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
