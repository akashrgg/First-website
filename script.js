
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