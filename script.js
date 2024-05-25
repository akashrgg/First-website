
function sendEmail(){
     Email.send({
          Host : "smtp.gmail.com",
          Username : "akashzzh146@gmail.com",
          Password : "akash123",
          To : 'akashqq146@gmail.com',
          From : document.getElementById("email").value,
          Subject : "New Contact Form Enquiry",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );
}



function send(){
  
  document.getElementById("ll").style.display = "none";
  
}

function add(){
  document.getElementById("command").innerHTML = ca.value;
}
function del(){
  document.getElementById("command").innerHTML = "";
  loadimage.src ="";
  
  
  
}

let loadimage = document.getElementById("pic");
let inputfile = document.getElementById("input_file");

inputfile.onchange = function(){
  loadimage.src = URL.createObjectURL(inputfile.files[0]);
}
