


       var btn = document.getElementById("btn");
       btn.onclick = function() {
           let name = prompt("Enter The Password"); // name won't be null, but it may be falsey, so here
           // we check if the name is falsey:
           if (name == "AB_pass/test") {
               parent.location = 'indexAccessB.html';

           } else {
               parent.location = 'homeAccessB.html';

           }

       }
    
