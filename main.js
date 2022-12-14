//add task
$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    let todoText = $(this).val();
    if ($(this).val() !== "") {
      $("ul").append(`<li class="todo__list-item"><span>&#x2716;</span> ${todoText} </li>`);
    }
    $(this).val("");
  }
});

//delete task
$("ul").on('click', "span", function (e) {
  e.stopPropagation();
  $(this).closest("li").fadeOut(0, function () {
    $(this).remove();
  });
});

//delete all tasks
$(".todo__delete-all").on('click', function (e) {
  $("li").fadeOut(400, function () {
    $(this).remove();
  });
});

