function displayImages(image) {
    $.each(image, function (index, value) {
        let new_image = $("<img src ='" + value + "' alt='image of person" + index + "'>");
        new_image.css({"width": "100%", "height": "300px"})
        let new_border = $("<div id='person_" + index + "'>");
        new_border.css({"padding": "10px"})
        new_border.append(new_image)
        let new_col = $("<div class='col-md-2' id='p_" + index + "'>");
        new_col.append(new_border);
        $("#image_container").append(new_col);

    });
}

function displaySelect(name) {
    for (var i = 0; i < name.length; i++){
        let new_select = $("<select id = s_"+i+">")
        for (var j = 0; j < name.length; j++){
            var opt = new Option(name[j], j)
            opt.value = j
            opt.text = name[j]
            new_select.append(opt)
        }
        let new_col = $("<div class='col-md-2' id='p_" + i + "'>");
        new_col.append(new_select)
        $("#select_container").append(new_col)
    }
}

function check(name){
    var correct = []
    for (var i = 0; i < name.length; i++){
        var e = document.getElementById("s_"+i)
        var text = e.options[e.selectedIndex].text
        if (name[i] == text){
            correct.push(i)
            $("#s_"+i).css({"background-color": "green"})
        }else{
            $("#s_"+i).css({"background-color": "red"})
        }
        $("#s_"+i).prop('disabled', true)
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
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(correct),
    });
}

$(document).ready(function () {
    displayImages(image);
    displaySelect(name);
    $("#naming_result").click( function(){
        check(name)
    })
});