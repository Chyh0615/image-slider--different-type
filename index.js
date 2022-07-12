$(document).ready(function () {
    //automatically play
    $(".pictsOne > img:gt(0)").hide();
  
    setInterval(function () {
      $(".pictsOne > img:first")
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo(".pictsOne");
    }, 4000);
  
    //clicked the button to different images
    var imgItem = $(".pictsTwo img").length;
    for (let i = 1; i <= imgItem; i++) {
      $(".select").append('<li><span class="fa fa-circle"></span></li>');
    };
    $(".pictsTwo img").hide();
    $(".pictsTwo img:first").show();
    $(".select li:first").css({ "color": "rgb(0,0,0)" });
    $(".select li").click(select);
  
    function select() {
      var position = $(this).index() + 1;
  
      $(".partTwo img").hide();
      $(".partTwo img:nth-child(" + position + ")").fadeIn();
  
      $(".select li").css({"color": "rgba(0,0,0,0.5)"});
      $(this).css({ "color": "rgb(0,0,0)" });
    };
  
    //all function for one
    var imgLength = $(".pictsThree img").length;
    for (let i = 1; i <= imgLength; i++) {
      $(".selectTwo").append('<li><span class="fa fa-circle"></span></li>');
    };
    var imgPosition = 1;
  
    $(".pictsThree img").hide();
    $(".pictsThree img:first").show();
    $(".selectTwo li:first").css({ "color": "rgb(0,0,0)" });
    $(".selectTwo li").click(selectSecond);
    $(".right i").click(next);
    $(".left i").click(previous);
  
    function selectSecond() {
      var selePosition = $(this).index() + 1;
  
      $(".partThree img").hide();
      $(".partThree img:nth-child("+ selePosition +")").fadeIn();
  
      $(".selectTwo li").css({"color": "rgba(0,0,0,0.5)"});
      $(this).css({ "color": "rgb(0,0,0)" });
  
      imgPosition = selePosition;
    };
  
    function next() {
      if (imgPosition >= imgLength) {
        imgPosition = 1;
      } else {
        imgPosition++;
      };
  
      $(".partThree img").fadeOut(1500);
      $(".partThree img:nth-child("+ imgPosition +")").fadeIn(1500);
  
      $(".selectTwo li").css({"color": "rgba(0,0,0,0.5)"});
      $(".selectTwo li:nth-child("+ imgPosition +")").css({ "color": "rgb(0,0,0)" });
    };
  
    function previous() {
      if (imgPosition <= 1) {
        imgPosition = imgLength;
      } else {
        imgPosition--;
      };
  
      $(".partThree img").fadeOut(1500);
      $(".partThree img:nth-child("+ imgPosition +")").fadeIn(1500);
  
      $(".selectTwo li").css({"color": "rgba(0,0,0,0.5)"});
      $(".selectTwo li:nth-child("+ imgPosition +")").css({ "color": "rgb(0,0,0)" });
    };
  
    setInterval(function() {
      next()
    }, 5000);
  })
  