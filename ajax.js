function ajax(){

// Creating an XHR object
var xhttp = new XMLHttpRequest();
// Eventlistner


xhttp.onreadystatechange = function(){
    // Condition
    if(this.readyState==4&&this.status==200){
        // document.getElementById("demo").innerHTML = this.responseText;
        var response = JSON.parse(this.responseText);
 
        var Jgrocery = response.grocery;
        
        
        var output ="";
        for(var i=0;i<Jgrocery.length;i++){
            output +=`

            
  <tbody>

     <tr>
      <th scope="row">${[i+1]}</th>
      <td>${Jgrocery[i].name}</td>
      <td>${Jgrocery[i].quantity}</td>
      <td>${Jgrocery[i].unit}</td>
      <td>${Jgrocery[i].department}</td>
      <td>${Jgrocery[i].notes}</td>      
    </tr>
   
  </tbody>
</table>`;  //here + symbol is used to keep all the names otherwise each name will replaced everytime when we hit submit.
        }

        console.log(output);
        document.getElementById("demo").innerHTML = output;


    }
}

// xhttp.open("GET", "ajax.txt", true );
xhttp.open("GET", "people.json", true );
xhttp.send();
}
