function displayImages(image) {
    $.each(image, function (index, value) {
        let new_image = $("<img src ='" + value + "' alt='image of person" + index + "'>");
        new_image.css({"width": "70%", "height": "200px"})
        let new_col = $("<div class='col-md-2' id='p_" + index + "'>");
        new_image.draggable({
            cursor: "move",
            revert: "invalid",
            zIndex: 10000,
            start: function (e, i) {
                $("#block1").css({"background-color": "yellow"});
                $("#block2").css({"background-color": "yellow"});
                $("#block3").css({"background-color": "yellow"});
                $("#block4").css({"background-color": "yellow"});
                $("#block5").css({"background-color": "yellow"});

            },
            stop: function (e, i) {
                 $("#block1").css({"background-color": "darkgrey"});
                 $("#block2").css({"background-color": "darkgrey"});
                 $("#block3").css({"background-color": "darkgrey"});
                 $("#block4").css({"background-color": "darkgrey"});
                 $("#block5").css({"background-color": "darkgrey"});
            },
        });
        new_col.append(new_image);
        $("#ordering_people").append(new_col);

    });
}

$(document).ready(function () {
    displayImages(data);
    $("#block1").droppable({
        over: function(){
            $("#block1").css({"background-color":"blue"});
        },
        out: function() {
            $("#block1").css({"background-color": "darkgrey"});
        },
    });

    $("#block2").droppable({
        over: function(){
            $("#block2").css({"background-color":"blue"});
        },
        out: function() {
            $("#block2").css({"background-color": "darkgrey"});
        },
    });

    $("#block3").droppable({
        over: function(){
            $("#block3").css({"background-color":"blue"});
        },
        out: function() {
            $("#block3").css({"background-color": "darkgrey"});
        },
    });

    $("#block4").droppable({
        over: function(){
            $("#block4").css({"background-color":"blue"});
        },
        out: function() {
            $("#block4").css({"background-color": "darkgrey"});
        },
    });

    $("#block5").droppable({
        over: function(){
            $("#block5").css({"background-color":"blue"});
        },
        out: function() {
            $("#block5").css({"background-color": "darkgrey"});
        },
    })


});