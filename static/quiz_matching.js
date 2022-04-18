function displayImages(image) {
    $.each(image, function (index, value) {
        let new_image = $("<img src ='" + value + "' alt='image of person" + index + "'>");
        new_image.css({"width": "100%", "height": "300px"})
        let new_border = $("<div id='person_" + index + "'>");
        new_border.css({"padding": "10px"})
        new_border.append(new_image)
        let new_col = $("<div class='col-md-2' id='p_" + index + "'>");
        new_col.append(new_border);
        $("#matching_people").append(new_col);

    });
}

function displayFacts(data) {
    $.each(data, function (index, value) {
        let person = value["person"]
        console.log(person)
        let fact = value["fact"]
        let new_fact = $("<div>")
        new_fact.text(fact)
        new_fact.css({"border": "2px solid", "width": "250px", "text-align": "center"})
        new_fact.data("person", person)
        new_fact.draggable({
            cursor: "move",
            revert: "invalid",
            zIndex: 10000,
            start: function (e, i) {
                $("#person_0").css({"background-color": "yellow"});
                $("#person_1").css({"background-color": "yellow"});
                $("#person_2").css({"background-color": "yellow"});
                $("#person_3").css({"background-color": "yellow"});
                $("#person_4").css({"background-color": "yellow"});

            },
            stop: function (e, i) {
                $("#person_0").css({"background-color": "white"});
                $("#person_1").css({"background-color": "white"});
                $("#person_2").css({"background-color": "white"});
                $("#person_3").css({"background-color": "white"});
                $("#person_4").css({"background-color": "white"});
            },
        });

        new_fact.hover(function () {
            $(this).css({"background-color": "lightpink", "cursor": "move"});
        });
        new_fact.mouseleave(function () {
            $(this).css({"background-color": "white"});
        })

        $("#facts").append(new_fact)
    });
}

$(document).ready(function () {
    displayImages(image);
    displayFacts(data);
    $("#person_0").droppable({
        over: function(){
            $("#person_0").css({"background-color":"blue"});
        },
        out: function() {
            $("#person_0").css({"background-color": "white"});
        },

    })
    $("#person_1").droppable({
        over: function(){
            $("#person_1").css({"background-color":"blue"});
        },
        out: function() {
            $("#person_1").css({"background-color": "white"});
        },

    })
    $("#person_2").droppable({
        over: function(){
            $("#person_2").css({"background-color":"blue"});
        },
        out: function() {
            $("#person_2").css({"background-color": "white"});
        },

    })
    $("#person_3").droppable({
        over: function(){
            $("#person_3").css({"background-color":"blue"});
        },
        out: function() {
            $("#person_3").css({"background-color": "white"});
        },

    })
    $("#person_4").droppable({
        over: function(){
            $("#person_4").css({"background-color":"blue"});
        },
        out: function() {
            $("#person_4").css({"background-color": "white"});
        },
    })

});