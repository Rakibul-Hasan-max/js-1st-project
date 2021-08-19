document.getElementById('btn-btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-address');
    const userEmail = emailField.value;
    console.log(userEmail);
    //get user pass
    const passField = document.getElementById('password');
    const userPass = passField.value;

    if(userEmail == 'rakibulhasan4041@gmail.com' && userPass == 'secret'){
        window.location.href = "banking.html";
    }
})