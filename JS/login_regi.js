
  var firebaseConfig = {
    apiKey: "AIzaSyDCYDJzqPLo0I51CDQQj02PDIIxw_hW5po",
    authDomain: "conatactform.firebaseapp.com",
    databaseURL: "https://conatactform.firebaseio.com",
    projectId: "conatactform",
    storageBucket: "conatactform.appspot.com",
    messagingSenderId: "230075649297",
    appId: "1:230075649297:web:fbd89a94fdb8db2c9c10b0",
    measurementId: "G-8JFYVG5LHX"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();  


  var messagesRef=firebase.database().ref('messages');



document.getElementById('registrationform').addEventListener('submit',registerForm);
document.getElementById('loginform').addEventListener('submit',LoginForm);

function registerForm(e){

    e.preventDefault();
    //console.log("hello")
  
    var name=getInputValue('name');
    var emailid=getInputValue('emailid');
    var password=getInputValue('password');
    var cpassword=getInputValue('cpassword');

   // console.log(name);

   var db = firebase.database();
   db.ref("messages").once("value", function (snap) {
   var value1 = snap.val();
   var result = Object.keys(value1).map(function (key) {
   return Number(key), value1[key];
   })
   console.log(result)
   var found = [];
   for (var i = 0; i < result.length; i++) {
  //  console.log(result[i])
   if (emailid == result[i].emailid) {
   found.push(result[i]);
   // console.log(icnt1)
   
   }
   }
   console.log("))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))");
   console.log(found);
   if (found.length==0) {
   console.log('reg new user')
   saveMessage(name, emailid, password, cpassword)
   //
   } else {
   alert("emailid is already exist")
   console.log(found)
   }
   }, function (err) {
   console.log(err);
   }); var db = firebase.database();
   db.ref("messages").once("value", function (snap) {
   var value1 = snap.val();
   var result = Object.keys(value1).map(function (key) {
   return Number(key), value1[key];
   })
   console.log(result)
   var found = [];
   for (var i = 0; i < result.length; i++) {
  //  console.log(result[i])
   if (emailid == result[i].emailid) {
   found.push(result[i]);
   // console.log(icnt1)
   
   }
   }
   found.l
   if (found.length==0) {
   console.log('reg new user')
   saveMessage(name, emailid, password, cpassword)
   //
   } else {
   alert("emailid is already exist")
   console.log(found)
   }
   }, function (err) {
   console.log(err);
   });

    


//     if(password==cpassword){
//       saveMessage(name,emailid,password,cpassword)
   
//     //window.open("Login.html")
// }else{
//   alert("password does not match")
//   // $(document).ready(function(){
//   //   $("#btn1").click(function(){
//   //   //$("#reg_form").hide();
//   //   $("#reg_form").show();
//   //   });
//   //   });
// }

}


function getInputValue(id){
    return document.getElementById(id).value;
}


function  saveMessage(name,emailid,password,cpassword){
console.log("-------------------------------------------------------");
  var strcnt=password.length;
  if(strcnt>=8){
    if(password==cpassword){
      
    var newMessageRef=messagesRef.push()
    newMessageRef.set({
        name:name,
        emailid:emailid,
        password:password,
        cpassword:cpassword
    }).then(function(){
      //loader start  
      $("#form_loader").delay(1000).fadeOut("slow");
      $("#form_loader").addClass('test1');
      $("#form_loader").removeClass('test');
      //loader end

      data=sessionStorage.getItem("emailid")
      if(data==null){
          $("#reg_form").hide();
          $("#login_page").show();
          //console.log("yes you are log in");
      }
      else{
        window.open("DASHBOARD.html")
        //console.log("you are not log in")
      } 
        
    })
}
else{
    alert("Password does not match")
}
}else{
  alert("Password require minimum 8 characters")
}

}


 
function LoginForm(e){
  
  e.preventDefault();
  var txtEmail=getInputValue('txtEmail');
  var txtPassword=getInputValue('txtPassword');
  console.log(txtEmail)
  console.log(txtPassword)
  var db = firebase.database();
  db.ref("messages").on("value", function(snap) {
  var value1=snap.val();
  //console.log(snap);
  var result=Object.keys(value1).map(function(key){
    return Number(key),value1[key];
  })

  var icnt1=0;
  var icnt2=0;
  for(var i=0;i<result.length;i++)
  {
    if(txtEmail==result[i].emailid){
      icnt1=1;
      if(txtPassword==result[i].password){
        icnt2=1;
      //console.log("yess");
      sessionStorage.setItem("emailid",txtEmail);
      window.open("DASHBOARD.html")
      break;
    }
    }
    console.log(result[i]);
  }

  if(icnt1==0)
  {
    alert("wrong email id");
  }
  else if(icnt2==0)
  {
    alert("wrong password");
  }

 
  
  //console.log(value1);
  // success method is not called
}, function(err) {
    console.log(err);
  // error callback triggered with PERMISSION_DENIED
});

}


data=sessionStorage.getItem("emailid")
$(document).ready(function(){
  $("#already_reg").click(function(){
if(data==null){
  
          $("#reg_form").hide();
          $("#login_page").show(); 
}
else{
  window.open("DASHBOARD.html")
}
});
});

  $(document).ready(function(){
      $("#register").click(function(){
          $("#reg_form").show();
          $("#login_page").hide(); 
      });
  });


/*var firebaseConfig = {
    apiKey: "AIzaSyDCYDJzqPLo0I51CDQQj02PDIIxw_hW5po",
    authDomain: "conatactform.firebaseapp.com",
    databaseURL: "https://conatactform.firebaseio.com",
    projectId: "conatactform",
    storageBucket: "conatactform.appspot.com",
    messagingSenderId: "230075649297",
    appId: "1:230075649297:web:fbd89a94fdb8db2c9c10b0",
    measurementId: "G-8JFYVG5LHX"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  document.getElementById('loginform').addEventListener('submit',LoginForm);
  
  
  function getInputValue(id){
    return document.getElementById(id).value;
  }
  
  
  function LoginForm(e){
  
    e.preventDefault();
    var txtEmail=getInputValue('txtEmail');
    var txtPassword=getInputValue('txtPassword');
    console.log(txtEmail)
    console.log(txtPassword)
    var db = firebase.database();
    db.ref("messages").on("value", function(snap) {
    var value1=snap.val();
    //console.log(snap);
    var result=Object.keys(value1).map(function(key){
      return Number(key),value1[key];
    })
  
    var icnt1=0;
    var icnt2=0;
    for(var i=0;i<result.length;i++)
    {
      if(txtEmail==result[i].emailid){
        icnt1=1;
        if(txtPassword==result[i].password){
          icnt2=1;
        //console.log("yess");
        sessionStorage.setItem("emailid",txtEmail);
        window.open("DASHBOARD.html")
        break;
      }
      }
      console.log(result[i]);
    }
  
    if(icnt1==0)
    {
      alert("wrong email id");
    }
    else if(icnt2==0)
    {
      alert("wrong password");
    }
  
   
    
    //console.log(value1);
    // success method is not called
  }, function(err) {
      console.log(err);
    // error callback triggered with PERMISSION_DENIED
  });
  
  }
*/

