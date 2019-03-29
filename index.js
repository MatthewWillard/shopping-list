$(function (){ 
  $('#js-shopping-list-form').submit( function(event) {
      const food = $('#shopping-list-entry').val();
      $('.shopping-list').append
          ('<li>' 
              +'<span class="shopping-item">' 
              + food 
              + '</span>' 
              + '<button class="shopping-item-toggle">' 
              + '<span class="button-label">' 
              + 'check' 
              + '</span>' 
              + '</button>' 
              + ' '
              + '<button class="shopping-item-delete">'
              + '<span class="button-label">' 
              + 'delete'
              + '</span>'
              + '</button>'
           + '</li>');
      event.preventDefault();
  });
})


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
