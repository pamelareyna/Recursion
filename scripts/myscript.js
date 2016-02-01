$(document).ready(function(){

   $("form").on("submit", function(event){
    event.preventDefault()
    $(".tab").show();

    var inputValue = $("input#value");
    var fact = parseInt(inputValue.val())
    inputValue.val("")
    function recursionFactorial(fact){
      if(fact === 0){
        return 1;
      } else {
        return fact * recursionFactorial(fact - 1)
      }
    }

    $("tr.ag").empty().append("<td>"+ fact + "!" +"</td>")
    $("tr.ag").append("<td>"+ recursionFactorial(fact) +"</td>")
    })

})
