const count=0;
    function httpreq(){

        var c=document.getElementById("d3");

var xhr = new XMLHttpRequest();

console.log(xhr);

xhr.onreadystatechange = function(){

           if(this.readyState == 4 && this.status == 200){

                      var data=this.responseText;

                      var obj=JSON.parse(data);

                      for(var i=0;i<10;i++){
                               var node=document.createElement("img");

                                 node.src=obj[i].url;
                                 const mj=JSON.stringify(node);
if(i==0){
    c.innerHTML=mj;
}
                                 c.appendChild(node);
    

                      }

                     

           }}

           xhr.open("GET","https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09");

           xhr.send();
}




function cat(str){

    var c=document.getElementById("d2");

var xhr = new XMLHttpRequest();

console.log(xhr);

xhr.onreadystatechange = function(){

       if(this.readyState == 4 && this.status == 200){

                  var data=this.responseText;


                c.innerHTML=data;
                        //    var node=document.createElement("div");

                        //      node.innerHTML=data;

                        //      c.appendChild(node);


                

                 

       }}

       xhr.open("GET",str);

       xhr.send();
}
