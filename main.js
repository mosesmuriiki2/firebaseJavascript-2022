// Initialize Firebase (ADD YOUR OWN DATA
// TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  import { initializeApp } from 'firebase/app';
  import { getDatabase,ref,set } from 'firebase/database';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC6C1HW5J98v7SV9w4D4NduEFafF_EcgkE",
    authDomain: "daniel-patient-details.firebaseapp.com",
    databaseURL: "https://daniel-patient-details-default-rtdb.firebaseio.com",
    projectId: "daniel-patient-details",
    storageBucket: "daniel-patient-details.appspot.com",
    messagingSenderId: "109275173893",
    appId: "1:109275173893:web:08dd8dfe998b29ac0ef86c",
    measurementId: "G-2L2FTJD2K3"
  };
   
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();




  // reference messages collection
  var messageRef =firebase.database().ref('messages');
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var gender = getInputVal('gender');
  var disease = getInputVal('disease');
  var age = getInputVal('age');
  var weight = getInputVal('weight');
  var height = getInputVal('height');
  var bgroup = getInputVal('bgroup');
  var comment = getInputVal('comment');
  
  

  saveMessage(fname,lname,gender,disease,age,weight,height,bgroup,comment);
   // Show alert
   document.querySelector('.alert').style.display = 'block';

   // Hide alert after 3 seconds
   setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
   },3000);
 
   // Clear form
   document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//save message
 function saveMessage(fname,lname,gender,disease,age,weight,height,bgroup,comment){
    var newMessage = messageRef.push();
    newMessage.set({
     fname : fname,
     lname : lname,
     gender : gender,
     disease : disease,
     age : age,
     weight : weight,
     height : height,
     bgroup : bgroup,
     comment : comment,
    });
 }

// Save message to firebase
