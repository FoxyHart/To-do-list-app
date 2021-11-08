function newItem(){

    
       let li = $('<li></li>');
       let inputValue = $('#input').val();
       li.append(inputValue);

       if (inputValue === '') {
        alert("You must write something!");
       } else {
        $('#list').append(li);
       }

        function crossOut() {
            li.toggleClass("strike");
        }
        li.on("dblclick", function crossout() {
            li.toggleClass("strike");
        });
    
        let crossOutButton = $('<button class="crossOutButton">X</button>');
        li.append(crossOutButton);


        crossOutButton.on("click", deleteListItem)
        function deleteListItem() {
         li.addClass("delete");
        };
     
       $('#list').sortable();
    
    }
    
     
    
    
    
    
    
    
    
    