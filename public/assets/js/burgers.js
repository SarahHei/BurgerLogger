$(function() {
    $(".eatBurger").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("eating");
      console.log(id, newEat);
  
      var newEatenState = {
        eaten: newEat
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed eaten to", newEatenState);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#bu").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });