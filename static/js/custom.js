$.MyAPP = {};

$.MyAPP.Disconnect = function (cname){
  console.log(cname)
  $.ajax({
    type: "DELETE",
    dataType: "json",
    url: "api/v1/session",
    data: JSON.stringify({ "cname": cname }),
    success: function(data) {
      location.reload();
      console.log(data);
    },
    error: function(a,b,c) {
      console.log(a,b,c)
      location.reload();
    }
  });
}

$(function() {
  new Clipboard('.button-copy');

  //$( ".btn-disconnect" ).click(function() {
  //  alert( "Handler for .click() called." );
  //});
  //window.location.reload();
})


$('#create-new-cert').on('click',function(event){
  $("#infoModel").modal("show");
})


$('#dropdownMenuButton').on('show.bs.dropdown', function () {
  // do something…
  console.log("Button pressed")
})