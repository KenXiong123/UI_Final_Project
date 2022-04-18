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

function displayFacts(name) {
    $.each(name, function (index, value) {
        let person = name[index]
        console.log(person)
        let fact = value["fact"]
        let new_fact = $("<div>")
        
    });
}

$(document).ready(function () {
    displayImages(image);
    displaySelect(name);
    

});