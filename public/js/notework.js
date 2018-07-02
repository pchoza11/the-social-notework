$(document).ready(function () {
    console.log("loaded");

    $("#signup-button").on("click", function(event){  
        event.preventDefault();
        var passwordSign1 = $('#signup-password').val();
        var passwordSign2 = $('#signup-password-verify').val();
        if(passwordSign1 === passwordSign2) {
            console.log("password match");
            checkUser();
        }
        else {
            $(".form-control").empty();
            alert("passwords dont match, try again");
            // $('#signup-password').text("");
            // $('#signup-password-verify').text("");
        }
    });

    function checkUser(){
        var usernameSign = $('#signup-username').val();
        $.get("/api/users", function(data) {
            console.log(data);
            if (data.length===0)
            {
                console.log("hello")
                createUser();
            }
            else{
                for (var i = 0; i < data.length; i++) {
                    if (usernameSign!=data[i].name){
                        createUser();
                    }
                    else {
                        alert("username exists, please try again");
                        return;
                    }
                }
            }

        });
    }

    function createUser (){
        var usernameSign = $('#signup-username').val();
        var emailSign = $('#signup-email').val();
        var passwordSign1 = $('#signup-password').val();
        var newUser = {
            name: usernameSign,
            email: emailSign,
            password: passwordSign1
        };
        console.log(newUser)
        $.post("/api/users", newUser)
        .then(console.log("created new account"));
        // Reload the page to get the updated list
        // Location.reload();            
    }

        $(document).on("click","#login-button", function(){
            event.preventDefault();
            var usernameLog = $('#login-username').val();
            var passwordLog = $('#login-password').val();
            if (usernameLog!="" && passwordLog!=""){
                console.log(usernameLog,passwordLog);
                $.get("/api/users", function(data) {
                    for (var i = 0; i < data.length; i++) {
                        console.log(data[i]);
                        if (usernameLog===data[i].name){
                            var userIndex=i;
                            console.log ("user found")
                            if (passwordLog===data[userIndex].password){
                                console.log ("user-password match!");
                                alert ("Welcome "+ data[userIndex].name)
                            }
                            else {
                                alert("password incorrect, please try again");
                            }
                        }
                        else {
                            alert("user does not exist, make an account or try again!")
                        }
                    }
                });
            }
            else{
                alert ("please make sure you've filled in both fields");
                return;
            }
    });
});
