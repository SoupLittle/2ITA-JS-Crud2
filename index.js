 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBc1GlHWnX7Dx2EMmn5JMmdZHkFsVpMmP8",
   authDomain: "crud2-1b32c.firebaseapp.com",
   projectId: "crud2-1b32c",
   storageBucket: "crud2-1b32c.appspot.com",
   messagingSenderId: "37852637066",
   appId: "1:37852637066:web:5644830d5d539891fc4a73",
   measurementId: "G-E5E82CN0QQ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

        import {getDatabase, ref, get, set, child, update, remove}
        from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js'
        

        var db = getDatabase();

        var enterID = document.querySelector("#enterID");
        var enterName = document.querySelector("#enterName");
        var enterAge = document.querySelector("#enterAge");
        var findID = document.querySelector("#findID");
        var findName = document.querySelector("#findName");
        var findAge = document.querySelector("#findAge");
      

        var insertBtn = document.querySelector("#insert");
        var updateBtn = document.querySelector("#update");
        var removeBtn = document.querySelector("#remove");
        var findBtn = document.querySelector("#find");

        function InsertData() {
            set(ref(db, "People/"+ enterID.value),{
                Name: enterName.value,
                ID: enterID.value,
                Age: enterAge.value
            })
            .then(()=>{
                alert("Data added successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        function FindData() {
            const dbref = ref(db);

            get(child(dbref, "People/" + findID.value))
            .then((snapshot)=>{
                if(snapshot.exists()){
                    findName.innerHTML = "Name: " + snapshot.val().Name;
                    findAge.innerHTML = "Age: " + snapshot.val().Age;
                } else {
                    alert("No data found");
                }
            })
            .catch((error)=>{
                alert(error)
            })
            
        }

        function UpdateData(){
            update(ref(db, "People/"+ enterID.value),{
                Name: enterName.value,
                Age: enterAge.value
            })
            .then(()=>{
                alert("Data updated successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        function RemoveData(){
            remove(ref(db, "People/"+ enterID.value))
            .then(()=>{
                alert("Data deleted successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        insertBtn.addEventListener('click', InsertData);
        updateBtn.addEventListener('click', UpdateData);
        removeBtn.addEventListener('click', RemoveData);
        findBtn.addEventListener('click', FindData);
