$(function(){
    $("#signinButton").click( function (evt) {
        $.post("/users/new", $("#username").serialize())    
    })

    $("#entertwitbutton").click(function(evt){
        input = $("#twit")[0].value
        if (input.length < 140){
            $.post("/twit/new", $("#twit").serialize())    
            $("#twit")[0].value = ""
        }
        else{
            alert("Twit can't be more than 140 characters.")
        }

    })
    




    var gettwits = function(){ 
        $.get("/twit/all", function(data) {
            $("#twitstream").remove()
            $("#viewtwit").append(data)
        }); 
    };
    setInterval(gettwits, 1000);

    
})

