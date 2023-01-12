$(document).ready(function () {
  $("[data-modal=feedback]").on("click", function () {
    $(".overlay, .modal").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, .modal").fadeOut("slow");
  });
});
