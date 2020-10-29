  var Config = {
    apiKey: "AIzaSyAKSmikdo7DYIFxVsXli2qcGyxd7_To10g",
    authDomain: "test-f68e0.firebaseapp.com",
    databaseURL: "https://test-f68e0.firebaseio.com",
    projectId: "test-f68e0",
    storageBucket: "test-f68e0.appspot.com",
    messagingSenderId: "745542438282",
    appId: "1:745542438282:web:c5c87eb86bc206a1340c73",
    measurementId: "G-ZP05FSMMBQ"
  };
  firebase.initializeApp(Config);
  firebase.analytics();

const  senddata=firebase.database().ref("My User"); 
document.getElementById("go").addEventListener('submit',sc)

function sc(e)
{
e.preventDefault();
var pno=getVal("pic");
var fir=getVal("firstname");
var las=getVal("lastname");
var nos=getVal("no");
var db=getVal("dob");
var pl=getVal("place");
var ft=getVal("father");
var ftp=getVal("phone");
var mt=getVal("mother");
var mtp=getVal("phone1");
var ma=getVal("mail");
var ad=getVal("add");
var ps=getVal("psw");
send(pno,fir,las,nos,db,pl,ft,ftp,mt,mtp,ma,ad,ps);
document.getElementById("go").reset(); 
}
function getVal(id)
{
return document.getElementById(id).value;
}
function send(pno,fir,las,nos,db,pl,ft,ftp,mt,mtp,ma,ad,ps)
{
senddata.child(fir).set({
PICMENo:pno,
FirstName:fir,
LastName:las,
SerialNo:nos,
DateofBirth:db,
BirthPlace:pl,
FatherName:ft,
FatherMobileNo:ftp,
MotherName:mt,
MotherMobileNo:mtp,
EMail:ma,
Address:ad,
Password:ps
}); 
}

