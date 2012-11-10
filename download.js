$(document).ready(function() {
  function download() {
    var self = this;
    console.log($("body"));
    $(".dataList").find("tbody").children("tr:nth-child(1)").nextAll().children("td:nth-child(2)").find("a").each(function(item) {
       console.log($(this).attr("href"));
    }, this);
  }

  download();
});

