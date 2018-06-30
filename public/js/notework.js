$(document).ready(function () {


    $("#login-button").on("click", function () {
        var usernameLog = $('#login-username').val().trim();
        var passwordLog = $('#login-password').val().trim();
        console.log(usernameLog, passwordLog)
    });

    $("#signup-button").on("click", function () {
        var usernameSign = $('#signup-username').val().trim();
        var emailSign = $('#signup-email').val().trim();
        var passwordSign1 = $('#signup-password').val().trim();
        var passwordSign2 = $('#signup-password-verify').val().trim();
    
        if(passwordSign1 === passwordSign2) {
            alert("password match");
            
            let newUser = {
                name: usernameSign,
                email: emailSign,
                password: passwordSign1
            }
            $.post('/api/users',newUser,(data)=>{
                res.end();
                console.log(data);
            }).then((results)=>{
                console.log(results);
                console.log(data);

            });

        } else {
            $(".form-control").empty();
            alert("passwords dont match");
            // $('#signup-password').text("");
            // $('#signup-password-verify').text("");
        }
        console.log(usernameSign, emailSign, passwordSign1, passwordSign2)
    });

    
});