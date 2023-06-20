const firebaseConfig = {
  apiKey: "AIzaSyAdyGimsLxUGxo13zRXt4lwgqxcp3khRJM",
  authDomain: "myfirebase-de0fb.firebaseapp.com",
  databaseURL: "https://myfirebase-de0fb-default-rtdb.firebaseio.com",
  projectId: "myfirebase-de0fb",
  storageBucket: "myfirebase-de0fb.appspot.com",
  messagingSenderId: "136206578876",
  appId: "1:136206578876:web:03f2b6b991f7c4e88f4cb9"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var myfirebaseDB = firebase.database().ref("myfirebase");

document.getElementById("myfirebase").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("myfirebase").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newmyfirebase = myfirebaseDB.push();

  newmyfirebase.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};