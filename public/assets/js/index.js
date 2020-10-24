$(function() {
    $(".change-devoured").on("click", function(event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("devour");
        const newDevoured = {
            devoured: newDevour
        };
        console.log(newDevoured)
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger_name").val(),
            devoured: $("[name=devoured]:checked").val()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
})