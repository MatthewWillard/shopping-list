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
  $(".shopping-list").on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");  
  });
});

$(function() {                       
  $(".shopping-list").on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();      
  });
});
