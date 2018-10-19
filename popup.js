$(document).ready(function(){
  $.ajax({
    url: "https://elocals.in/assignment/pdtsearch.php?tok=rydnksjd854mfk52", 
    success: function(data){
      let res2 = data.replace(/'/g, '"')
      let res1 = res2.replace(/None/g, '"None"')
      let res = JSON.parse(res1);
      res.map((r)=>{
        console.log(r.images[0].url);
        let width=100;
        let imgSrc = r.images[0].url.replace(/{@width}/g, width);
        imgSrc = imgSrc.replace(/{@height}/g,width);
        imgSrc = imgSrc.replace(/q={@quality}/g,'');
        $("#modal-content").append(
            "<div class='content'>"+
            r.titles.title+
            "</div>"
            // "<img src=" + imgSrc + "/>"
          )
      })
    },
    beforeSend: function(){
      $('#loader').show();
    },
    complete: function(){
        $('#loader').hide();
    },
  });
  // $.get("https://elocals.in/assignment/pdtsearch.php?tok=rydnksjd854mfk52", function(data, status){
  //   // let res1 = data.toString();
  //   let res2 = data.replace(/'/g, '"')
  //   let res1 = res2.replace(/None/g, '"None"')
  //   let res = JSON.parse(res1);
  //   res.map((r)=>{
  //     console.log(r.titles.title);
  //     $("#modal-content").append("<div class='content'>"+r.titles.title+"</div>")
  //   })
  // });
});