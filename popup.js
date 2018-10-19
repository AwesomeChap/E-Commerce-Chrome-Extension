

$(document).ready(function(){
  $.ajax({
    url: "https://elocals.in/assignment/pdtsearch.php?tok=rydnksjd854mfk52", 
    success: function(data){
      let res2 = data.replace(/'/g, '"')
      let res1 = res2.replace(/None/g, '"None"')
      let res = JSON.parse(res1);
      res.map((r)=>{
        console.log(r.images[0].url);
        let width=180;
        let title = r.titles.title;
        let subtitle = r.titles.subtitle;
        subtitle = subtitle === 'None' ? '' : subtitle;
        let price = r.price;
        let imgSrc = r.images[0].url.replace(/{@width}/g, width);
        imgSrc = imgSrc.replace(/{@height}/g,width);
        imgSrc = imgSrc.replace(/q={@quality}/g,'');
        $("#items").append(
            '<div class="item">'+
            '<div class="item-name">' +
            title +
            '</div>' +
            '<div class="item-details">' +
              '<div class="img">'+
              '<img src=' + imgSrc + '/>'+
              '</div>' +
              '<div class="details">' +
                '<div class="title">' +
                title +
                '</div>' +
                '<div class="subtitle">' +
                subtitle +
                '</div>' +
                '<div class="price">' +
                'Rs. ' + price +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div>'
          )
      })
    },
    beforeSend: function(){
      $('#loader').show();
      // $('.jotter').hide();
    },
    complete: function(){
        $('#loader').hide();
        $('.jotter').css({display:'flex'})

        // $('.jotter').show();
    },
  });

  $("#items .item").click(function(){
    alert('hjh');
  })

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#items .item").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $('#left').click(function(){
    $('#items').animate( { scrollLeft: '-=400' }, 200);
  })

  $('#right').click(function(){
    $('#items').animate( { scrollLeft: '+=400' }, 200);
  })

  $('#items').hover(function(){
    $('html,body').css({height:'320px'});
  },function(){
    $('html,body').css({height:'0px'});
  })
  
});