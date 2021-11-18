function ajax(){

    // Creating an XHR object
    var xhttp = new XMLHttpRequest();
    // Eventlistner
    xhttp.onreadystatechange = function(){
        // Condition
        if(this.readyState==4&&this.status==200){
            // document.getElementById("demo").innerHTML = this.responseText;
            var response = JSON.parse(this.responseText);
            console.log(response);
            var Jpeople = response.people;
            console.log(Jpeople);
            var output ="";
            for(var i=0;i<Jpeople.length;i++){
                output += "<li>"+ Jpeople[i].name +"</li>";  //here + symbol is used to keep all the names otherwise each name will replaced everytime when we hit submit.
            }
    
            console.log(output);
            document.getElementById("demo").innerHTML = output;
    
    
        }
    }
    
    // xhttp.open("GET", "ajax.txt", true );
    xhttp.open("GET", "people.json", true );
    
    xhttp.send();
    }
    