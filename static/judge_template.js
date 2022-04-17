
function next_page(key){
  int_key = parseInt(key) + 1
  // console.log(int_key)
  if(int_key < 6){
    window.location.href = "/learn/"+int_key
  }
  else{
    window.location.href = "/learn_complete"
  }
}

function last_page(key){
  int_key = parseInt(key) - 1
  // console.log(int_key)
  if(int_key > 0){
    window.location.href = "/learn/"+int_key
  }
  else{
    window.location.href = "/learn"
  }
}

$(document).ready(function () {
  // console.log(data)
  // console.log(key)

  $("#next_learn").click(function(){
    next_page(key)
  })

  $("#last_learn").click(function(){
    last_page(key)
  })
});
