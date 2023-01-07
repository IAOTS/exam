       var btn = document.getElementById("btn");
       btn.onclick = function() {
           let name = prompt("Enter The Password"); // name won't be null, but it may be falsey, so here
           // we check if the name is falsey:
           if (name == "fa21.") {
               parent.location = 'index2A.html';

           } else {
               parent.location = 'home2A.html';

           }

       }
 
