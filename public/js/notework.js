$(document).ready(function () {
    var usernameLog = $('#login-username').val();
    var passwordLog = $('#login-password').val();
    console.log("loaded");

    // $(document).on("click","#login-button", function(){
    //     console.log("login");
    // });

    $("#signup-button").on("click", function(event){  
        event.preventDefault();
        var usernameSign = $('#signup-username').val();
        var emailSign = $('#signup-email').val();
        var passwordSign1 = $('#signup-password').val();
        var passwordSign2 = $('#signup-password-verify').val();
        console.log("password match");
        console.log(usernameSign, emailSign, passwordSign1, passwordSign2);
        if(passwordSign1 === passwordSign2) {
            var newUser = {
                name: usernameSign,
                password: passwordSign1
            };
            console.log(newUser)
            $.post("/api/users", newUser)
            .then(console.log("created new account"));
            // Reload the page to get the updated list
            location.reload();            
        }
        else {
            $(".form-control").empty();
            alert("passwords dont match, try again");
            // $('#signup-password').text("");
            // $('#signup-password-verify').text("");
        }
    });



    // function login(){
    //     event.preventDefault();
    //     if (!usernameLog.val().trim().trim() && !passwordLog.val().trim().trim()){
    //         alert ("please make sure you've filled in both fields")
    //         return;
    //     }
    //     else{
    //         $.get("/api/users", function(data) {
    //             for (var i = 0; i < data.length; i++) {
    //                 if (usernameLog===data[i].name){
    //                     var userIndex=i;
    //                     console.log ("user found")
    //                     if (passwordLog===data[userIndex].password){
    //                         console.log ("user-password match!");
    //                     }
    //                 }
    //             }
    //         });
    //     }
    // }
});
