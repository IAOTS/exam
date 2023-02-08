
       var btn = document.getElementById("btn");
       btn.onclick = function() {
           let name = prompt("Enter The Password"); // name won't be null, but it may be falsey, so here
           // we check if the name is falsey:
           if (name == "fa21.") {
               parent.location = 'index1B.html';

           } else {
               parent.location = 'home1B.html';

           }

       }
    
