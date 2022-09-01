$(document).ready(function () {
    $(".maincol").hide();
  });
  $(document).ready(function () {
    $(".maincol2").hide();
  });
  
  $(document).ready(function () {
    $("#bb").click(function () {
      $(".maincol").toggle();
    });
  });
  
  $(document).ready(function () {
    $("#bb2").click(function () {
      $(".maincol2").toggle();
    });
  });