var date = new Date()
 var time = date.getHours();
var greet;
console.log(time)
function greeting(time){
    if(time>12)
    greet = "Good AfetrNOon";
    else if(time>17)
    greet ="Good evening";
    

}
greeting(time);

document.getElementById("i").innerText = greet;