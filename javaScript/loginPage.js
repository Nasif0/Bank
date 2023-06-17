document.getElementById('login-button').addEventListener('click', function(){
     var emailField = document.getElementById('email');
     var email = emailField.Value;
    
     var passwordField = document.getElementById('password');
     var password = passwordField.value;
    
     if( email === 'bankloginpage@gmail.com' && password === 'bankloginpage' ){
          console.log('valid');
     }
     else{
          window.location.href = 'bank.html';
     }
})