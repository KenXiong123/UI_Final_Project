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
        let new_fact = $("<div id='f" + index + "'>");
        new_fact.text(fact)
        new_fact.css({"border": "2px solid", "width": "250px", "text-align": "center"})
        new_fact.data("person", person)
        new_fact.draggable({
            cursor: "move",
            revert: "invalid",
            zIndex: 10000,
            start: function (e, i) {
                $("#person_0").css({"background-color": "#F8C8DC"});
                $("#person_1").css({"background-color": "#F8C8DC"});
                $("#person_2").css({"background-color": "#F8C8DC"});
                $("#person_3").css({"background-color": "#F8C8DC"});
                $("#person_4").css({"background-color": "#F8C8DC"});

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
            $(this).css({"background-color": "#F8C8DC", "cursor": "move"});
        });
        new_fact.mouseleave(function () {
            $(this).css({"background-color": "white"});
        })

        $("#facts").append(new_fact)
    });
}

function check(correct, wrong) {
    console.log(correct)
    console.log(wrong)
    if(correct.indexOf("f1") >= 0){
        $("#f1").css({"background-color": "green"});
    }
    else{
         $("#f1").css({"background-color": "red"});
    }
    if(correct.indexOf("f2") >= 0){
        $("#f2").css({"background-color": "green"});
    }
    else{
         $("#f2").css({"background-color": "red"});
    }
    if(correct.indexOf("f3") >= 0){
        $("#f3").css({"background-color": "green"});
    }
    else{
        $("#f3").css({"background-color": "red"});
    }
    if(correct.indexOf("f4") >= 0){
        $("#f4").css({"background-color": "green"});
    }
    else{
         $("#f4").css({"background-color": "red"});
    }
    if(correct.indexOf("f5") >= 0){
        $("#f5").css({"background-color": "green"});
    }
    else{
         $("#f5").css({"background-color": "red"});
    }
    if(correct.indexOf("f6") >= 0){
        $("#f6").css({"background-color": "green"});
    }
    else{
         $("#f6").css({"background-color": "red"});
    }
    if(correct.indexOf("f7") >= 0){
        $("#f7").css({"background-color": "green"});
    }
    else{
         $("#f7").css({"background-color": "red"});
    }

    $("#dialog").dialog({
          buttons: [
          {
                text:"You got "+correct.length+" right",
                click: function() {
                $( this ).dialog( "close" );
            }
          }
          ]
    });

    $.ajax({
        type: "POST",
        url: "/correct",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(correct),

    });
}

$(document).ready(function () {
    displayImages(image);
    displayFacts(data);
    let control = false
    const correct = []
    const wrong = []
    $("#person_0").droppable({
        over: function () {
            $("#person_0").css({"background-color": "blue"});
        },
        out: function () {
            $("#person_0").css({"background-color": "white"});
        },
        drop: function (event, ui) {
            let cur_fact = $(ui.draggable);
            let correct_person = cur_fact.data("person");
            if (correct_person === "Sandra Day O’Connor" && !correct.includes(cur_fact.attr("id"))) {
                correct.push(cur_fact.attr("id"));
            } else if (!wrong.includes(cur_fact.attr("id"))){
                wrong.push(cur_fact.attr("id"));
            }
        },

    })
    $("#person_1").droppable({
        over: function () {
            $("#person_1").css({"background-color": "blue"});
        },
        out: function () {
            $("#person_1").css({"background-color": "white"});
        },
        drop: function (event, ui) {
            let cur_fact = $(ui.draggable);
            let correct_person = cur_fact.data("person");
            if (correct_person === "Ruth Bader Ginsburg" && !correct.includes(cur_fact.attr("id"))) {
                correct.push(cur_fact.attr("id"));
            } else if (!wrong.includes(cur_fact.attr("id"))){
                wrong.push(cur_fact.attr("id"));
            }
        },

    })
    $("#person_2").droppable({
        over: function () {
            $("#person_2").css({"background-color": "blue"});
        },
        out: function () {
            $("#person_2").css({"background-color": "white"});
        },
        drop: function (event, ui) {
            let cur_fact = $(ui.draggable);
            let correct_person = cur_fact.data("person");
            if (correct_person === "Sonia Sotomayor" && !correct.includes(cur_fact.attr("id"))) {
                correct.push(cur_fact.attr("id"));
            } else if (!wrong.includes(cur_fact.attr("id"))){
                wrong.push(cur_fact.attr("id"));
            }
        },

    })
    $("#person_3").droppable({
        over: function () {
            $("#person_3").css({"background-color": "blue"});
        },
        out: function () {
            $("#person_3").css({"background-color": "white"});
        },
        drop: function (event, ui) {
            let cur_fact = $(ui.draggable);
            let correct_person = cur_fact.data("person");
            if (correct_person === "Elena Kagan" && !correct.includes(cur_fact.attr("id"))) {
                correct.push(cur_fact.attr("id"));
            } else if (!wrong.includes(cur_fact.attr("id"))){
                wrong.push(cur_fact.attr("id"));
            }
        },
    })
    $("#person_4").droppable({
        over: function () {
            $("#person_4").css({"background-color": "blue"});
        },
        out: function () {
            $("#person_4").css({"background-color": "white"});
        },
        drop: function (event, ui) {
            let cur_fact = $(ui.draggable);
            let correct_person = cur_fact.data("person");
            if (correct_person === "Amy Coney Barrett" && !correct.includes(cur_fact.attr("id"))) {
                correct.push(cur_fact.attr("id"));
            } else if (!wrong.includes(cur_fact.attr("id"))){
                wrong.push(cur_fact.attr("id"));
            }
        },
    })

    $("#match_result").click(function () {
        if (control == false){
            check(correct, wrong)
            control = true
        }
    })

});