       var btn = document.getElementById("btn");
       btn.onclick = function() {
           let name = prompt("Enter The Password"); // name won't be null, but it may be falsey, so here
           // we check if the name is falsey:
           if (name == "fa21.") {
               parent.location = 'indexVA.html';

           } else {
               parent.location = 'homeVA.html';

           }

       }
       var note = document.getElementById("TestNotes");
       note.onclick = function() {
           document.getElementById("notes").style.display = "block";


       }