/*$(function() {
    $('.shopping-item').submit(event => {
      event.preventDefault();
      const userShoppingList = $(this).find(#shopping-list-entry)
      $("#shopping-list-entry").empty();
    }

  $('input').keydown(event =>
    $('.output').text(`Key pressed: ${event.key}`)
  );
});
*/


$(function() {          
  $(".shopping-item-toggle").click(function(event){
    $(".shopping-item").toggleClass("shopping-item__checked");  
  });
});

/*$(function() {
  $("span.shopping-item").closest("ul").click(function(){
     .css(text-decoration: line-through;)
  })
})

//-Maybe add .parent()/.closest - tried them both can't find one that works. 
  event.stopPropagation();???



/*$(function() {                       
  $("button").click(function(){  
    $(this).hide(".shopping-item");      
  });
});
*/
