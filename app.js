$(document).ready(function(){

  var $newTodo = $('#newTodo');
  var $submit = $('#submit');
  var $toDoList = $('#toDoList');

  $submit.on('click', function(event){
    $toDoList.append('<li class="list-item">'+$newTodo.val()+'<input type="checkbox" class="checkbox list-item"><button type="button" class=dButton>del</button></li>');

    $('.checkbox').unbind();
    $('.checkbox').on('click', function(event){
      $(this.parentElement).toggleClass('strike');
    });

    $('.dButton').unbind();
    $('.dButton').on('click', function(event){
      console.log('hi');
    })
  });

});
