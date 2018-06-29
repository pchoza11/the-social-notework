

$(document).ready(function () {

    $("#login-button").on("click", function () {
        var usernameLog = $('#login-username').val();
        var passwordLog = $('#login-password').val();
        console.log(usernameLog, passwordLog)
    });

    $("#signup-button").on("click", function () {
        var usernameSign = $('#signup-username').val();
        var emailSign = $('#signup-email').val();
        var passwordSign1 = $('#signup-password').val();
        var passwordSign2 = $('#signup-password-verify').val();
        
        if(passwordSign1 === passwordSign2) {
            alert("password match");
        } else {
            $(".form-control").empty();
            alert("passwords dont match");
            // $('#signup-password').text("");
            // $('#signup-password-verify').text("");
        }
        console.log(usernameSign, emailSign, passwordSign1, passwordSign2)
    });

    
});