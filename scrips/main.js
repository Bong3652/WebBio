var search = document.getElementsByClassName("form-control mr-sm-2")[0];
var inputWebName = document.getElementById("nameValInput");
var displayWebNameHint = document.getElementById("nameVal");

function welcome() {
    alert("Welcome to Yong Kai\'s web")
}


function validateWebName() {
    var input = inputWebName.value;
    if (input == "Personalized") {
        displayWebNameHint.innerHTML = "BottomLeft Click"
    } else {
        displayWebNameHint.innerHTML = input + "?"
    }  
    //alert(input)
}

inputWebName.addEventListener("input", validateWebName)

search.addEventListener("input", function(){
    alert("This part is not done!");
})





