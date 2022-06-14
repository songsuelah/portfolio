
$(function(){
  $('.guide1').each(function(){
      $(this).click(function(){
          var img_name = $(this).find('img');
          var img_src = $(img_name).attr('src');
          $('#modal').show();
          $('#modal img').attr('src',img_src);

      })
  })
 $("#modal button").click(function() {
    $("#modal").hide();
});
})


$(function(){
    $('.imageb1').each(function(){
        $(this).click(function(){
            var img_name = $(this).find('img');
            var img_src = $(img_name).attr('src');
            $('#image1').show();
            $('#image1 img').attr('src',img_src);

        })
    })
   $("#image1 button").click(function() {
      $("#image1").hide();
  });
  })

  $(function(){
    $('.imageb2').each(function(){
        $(this).click(function(){
            var img_name = $(this).find('img');
            var img_src = $(img_name).attr('src');
            $('#image2').show();
            $('#image2 img').attr('src',img_src);

        })
    })
   $("#image2 button").click(function() {
      $("#image2").hide();
  });
  })

  $(function(){
    $('.imageb3').each(function(){
        $(this).click(function(){
            var img_name = $(this).find('img');
            var img_src = $(img_name).attr('src');
            $('#image3').show();
            $('#image3 img').attr('src',img_src);

        })
    })
   $("#image3 button").click(function() {
      $("#image3").hide();
  });
  })

  $(function(){
    $('.imageb4').each(function(){
        $(this).click(function(){
            var img_name = $(this).find('img');
            var img_src = $(img_name).attr('src');
            $('#image4').show();
            $('#image4 img').attr('src',img_src);

        })
    })
   $("#image4 button").click(function() {
      $("#image4").hide();
  });
  })

  $(function(){
    $('.imageb5').each(function(){
        $(this).click(function(){
            var img_name = $(this).find('img');
            var img_src = $(img_name).attr('src');
            $('#image5').show();
            $('#image5 img').attr('src',img_src);

        })
    })
   $("#image5 button").click(function() {
      $("#image5").hide();
  });
  })

  $(function(){
    $('.imageb6').each(function(){
        $(this).click(function(){
            var img_name = $(this).find('img');
            var img_src = $(img_name).attr('src');
            $('#image6').show();
            $('#image6 img').attr('src',img_src);

        })
    })
   $("#image6 button").click(function() {
      $("#image6").hide();
  });
  })