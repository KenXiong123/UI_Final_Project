function displayImages(image,nameM) {
    $.each(image, function (index, value) {
        let new_image = $("<img src ='" + value + "' alt='image of person" + index + "' id='im_" + index + "'>");
        new_image.css({"width": "70%", "height": "200px"})
        new_image.data("person",nameM[index])
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
        new_image.hover(function () {
            $(this).css({"background-color": "#F8C8DC", "cursor": "move"});
        });
        new_image.mouseleave(function () {
            $(this).css({"background-color": "white"});
        })
        new_col.append(new_image);
        $("#ordering_people").append(new_col);

    });
}

function check1(correct1, wrong1) {
    console.log(correct1)
    console.log(wrong1)
    if (correct1.indexOf("im_0") >= 0) {
        $("#e1").css({"color": "green","font-weight":"bold","font-size":"20px","width":"100px","display": "inline-block","margin-left":"50px"});
        $("#e1").text("correct!");
    }
    else{
        $("#e1").css({"color": "red","font-weight":"bold","font-size":"20px","width":"100px","display": "inline-block","margin-left":"50px"});
        $("#e1").text("wrong!");
    }

    if (correct1.indexOf("im_1") >= 0) {
        $("#e2").css({"color": "green","font-weight":"bold","font-size":"20px","margin-left":"200px","width":"100px","display": "inline-block"});
        $("#e2").text("correct!");
    }
    else{
        $("#e2").css({"color": "red","font-weight":"bold","font-size":"20px","margin-left":"200px","width":"100px","display": "inline-block"});
        $("#e2").text("wrong!");
    }

    if (correct1.indexOf("im_2") >= 0) {
        $("#e3").css({"color": "green","font-weight":"bold","font-size":"20px","margin-left":"300px","width":"100px","display": "inline-block"});
        $("#e3").text("correct!");
    }
    else{
        $("#e3").css({"color": "red","font-weight":"bold","font-size":"20px","margin-left":"300px","width":"100px","display": "inline-block"});
        $("#e3").text("wrong!");
    }

    if (correct1.indexOf("im_3") >= 0) {
        $("#e4").css({"color": "green","font-weight":"bold","font-size":"20px","margin-left":"400px","display": "inline-block"});
        $("#e4").text("correct!");
    }
    else{
        $("#e4").css({"color": "red","font-weight":"bold","font-size":"20px","margin-left":"400px","display": "inline-block"});
        $("#e4").text("wrong!");
    }

    if (correct1.indexOf("im_4") >= 0) {
        $("#e5").css({"color": "green","font-weight":"bold","font-size":"20px","margin-left":"180px","display": "inline-block"});
        $("#e5").text("correct!");
    }
    else{
        $("#e5").css({"color": "red","font-weight":"bold","font-size":"20px","margin-left":"280px","display": "inline-block"});
        $("#e5").text("wrong!");
    }

    $("#dialog").dialog({
          buttons: [
          {
                text:"You got "+correct1.length+" right",
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
        data: JSON.stringify(correct1),

    });
}

function BlockInfo(name) {
    $.each(name, function (index, value) {
        let new_block = $("<div class='block' id='block" + (index + 1) + "'>");
        new_block.data("person", value);
        if (index==0){
            new_block.css({"border":"solid 1px darkgrey","width":"40px","height":"100px","background-color":"darkgrey","display":"inline-block"})
        }
        if (index ==1){
            new_block.css({"margin-left":"200px","border":"solid 1px darkgrey","width":"40px","height":"100px","background-color":"darkgrey","display":"inline-block"})
        }
        if(index ==2){
            new_block.css({"margin-left":"400px","border":"solid 1px darkgrey","width":"40px","height":"100px","background-color":"darkgrey","display":"inline-block"})
        }
        if(index ==3){
            new_block.css({"margin-left":"400px","border":"solid 1px darkgrey","width":"40px","height":"100px","background-color":"darkgrey","display":"inline-block"})
        }
        if(index ==4){
            new_block.css({"margin-left":"280px","border":"solid 1px darkgrey","width":"40px","height":"100px","background-color":"darkgrey","display":"inline-block"})
        }
        $("#allblocks").append(new_block);
    });
}

$(document).ready(function () {
    let control = false
    BlockInfo(name);
    displayImages(image,nameM);

    const correct1 = []
    const wrong1 = []
    $("#block1").droppable({
        over: function () {
            $("#block1").css({"background-color": "blue"});
        },
        out: function () {
            $("#block1").css({"background-color": "darkgrey"});
        },
        drop: function (event, ui) {
            let cur_p = $(ui.draggable);
            let correct_person = cur_p.data("person");
            if (correct_person === "Sonia Sotomayor" && !correct1.includes(cur_p.attr("id"))) {
                correct1.push(cur_p.attr("id"));
                cur_p.draggable("disable");
            } else if (!wrong1.includes(cur_p.attr("id"))){
                wrong1.push(cur_p.attr("id"));
            }
        },
    });

    $("#block2").droppable({
        over: function () {
            $("#block2").css({"background-color": "blue"});
        },
        out: function () {
            $("#block2").css({"background-color": "darkgrey"});
        },
        drop: function (event, ui) {
            let cur_p = $(ui.draggable);
            let correct_person = cur_p.data("person");
            if (correct_person === "Ruth Bader Ginsburg" && !correct1.includes(cur_p.attr("id"))) {
                correct1.push(cur_p.attr("id"));
                cur_p.draggable("disable");
            } else if (!wrong1.includes(cur_p.attr("id"))){
                wrong1.push(cur_p.attr("id"));
            }
        },
    });

    $("#block3").droppable({
        over: function () {
            $("#block3").css({"background-color": "blue"});
        },
        out: function () {
            $("#block3").css({"background-color": "darkgrey"});
        },
        drop: function (event, ui) {
            let cur_p = $(ui.draggable);
            let correct_person = cur_p.data("person");
            if (correct_person === "Elena Kagan" && !correct1.includes(cur_p.attr("id"))) {
                correct1.push(cur_p.attr("id"));
                cur_p.draggable("disable");
            } else if (!wrong1.includes(cur_p.attr("id"))){
                wrong1.push(cur_p.attr("id"));
            }
        },
    });

    $("#block4").droppable({
        over: function () {
            $("#block4").css({"background-color": "blue"});
        },
        out: function () {
            $("#block4").css({"background-color": "darkgrey"});
        },
        drop: function (event, ui) {
            let cur_p = $(ui.draggable);
            let correct_person = cur_p.data("person");
            if (correct_person === "Sandra Day O'Connor" && !correct1.includes(cur_p.attr("id"))) {
                correct1.push(cur_p.attr("id"));
                cur_p.draggable("disable");
            } else if (!wrong1.includes(cur_p.attr("id"))){
                wrong1.push(cur_p.attr("id"));
            }
        },
    });
    $("#block5").droppable({
        over: function () {
            $("#block5").css({"background-color": "blue"});
        },
        out: function () {
            $("#block5").css({"background-color": "darkgrey"});
        },
        drop: function (event, ui) {
            let cur_p = $(ui.draggable);
            let correct_person = cur_p.data("person");
            if (correct_person === "Amy Coney Barrett" && !correct1.includes(cur_p.attr("id"))) {
                correct1.push(cur_p.attr("id"));
                cur_p.draggable("disable");
            } else if (!wrong1.includes(cur_p.attr("id"))){
                wrong1.push(cur_p.attr("id"));
            }
        },
    })


    $("#order_result").click(function () {
        if (control == false){
            check1(correct1, wrong1)
            control = true
        }
        
    })

});