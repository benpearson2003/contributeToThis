function myFunction() {
    var string = "";
    // put your username after benpearson2003. remember the quotes and comma
    var contributors = [
        "franklloydwright1967"
    ];
    var lower = false;
    for(var i = 0; i < contributors.length; i++){
    	if(lower){
    		document.getElementById('console').innerHTML += string.toLowerCase();
        } else {
    		document.getElementById('console').innerHTML += string.toUpperCase();
        }
    	lower = !lower;
    }
}
