
const form  = document.getElementById('contact');
const alert = document.querySelector(".submit");


    //   firebase script  //

  const firebaseConfig = {
    apiKey: "AIzaSyC1xlucQwWjJERZupdiVJsp_lkkyvn56ks",
    authDomain: "contactformportfoliowebsite.firebaseapp.com",
    databaseURL: "https://contactformportfoliowebsite-default-rtdb.firebaseio.com",
    projectId: "contactformportfoliowebsite",
    storageBucket: "contactformportfoliowebsite.appspot.com",
    messagingSenderId: "179381208428",
    appId: "1:179381208428:web:8341f1c0776992aa395f49",
    measurementId: "G-HVP08MTT1M"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  const ref = database.ref("messages")

 form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name   = document.getElementById('name').value;  
    const email  = document.getElementById('email').value;  
    const subject = document.getElementById('subject').value;  
    const msg = document.getElementById('msg').value;  
 

  ref.push({

       name:name,
       email:email,
       subject:subject,
       msg:msg

  }) 
  
  
    alert.style.display="block"

    setTimeout(()=>{
        alert.style.display="none";
    },2000)

    form.reset()

})