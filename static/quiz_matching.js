function displayImages(image){
    $.each(image, function (index, value) {
        let new_image = $("<img src ='"+ value +"' alt='image of person"+ index +"'>");
        new_image.css({"width":"100%","height":"300px"})
        let new_col = $("<div class='col-md-2' id='person "+ index + "'>");
        new_col.append(new_image);
        $("#matching_people").append(new_col);
    });
}
function displayFacts(data){

    $.each(data, function (index, value) {
        let person = value["person"]
        console.log(person)
        let fact = value["fact"]
        let new_fact = $("<div>")
        new_fact.text(fact)
        new_fact.css({"border":"2px solid","width":"400px","text-align":"center"})
        new_fact.data("person",person)
        $("#facts").append(new_fact)

    });
}

$(document).ready(function () {
    displayImages(image);
    displayFacts(data);
});