var list_of_choices = [];

function addFields(){
            // Number of inputs to create
            var number = document.getElementById("choice").value;

            // Container <div> where dynamic content will be placed
            var container = document.getElementById("choices_field");
            // Clear previous contents of the container
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
            for (i=0;i<number;i++){
                // Append a node with a random text
                container.appendChild(document.createTextNode("Lựa chọn " + (i+1)));
                // Create an <input> element, set its type and name attributes
                var input = document.createElement("input");
                input.type = "text";
                input.id = "choice" + i;
                container.appendChild(input);
                // Append a line break
                container.appendChild(document.createElement("br"));
                list_of_choices = [];
            }
        }

function random(){
  var number = document.getElementById("choice").value;
  for (var i = 0; i < number; i++) {
    var choice = document.getElementById("choice"+i).value;
    list_of_choices.push(choice);}
  var result = list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
  alert ("Kết quả là: "+result);
}
