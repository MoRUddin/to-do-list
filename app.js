$(document).ready(function(){

  var $newTodo = $('#newTodo');
  var $submit = $('#submit');
  var $toDoList = $('#toDoList');
  var $checkbox;

  $submit.on('click', function(event){
    $toDoList.append('<li class="list-item">'+$newTodo.val()+'<input type="checkbox" class="checkbox"></li>').addClass("list-item");
  })

  $('.checkbox').on('click', function(){
    $('.list-item').css('text-decoration', 'line-through');
  })

});
