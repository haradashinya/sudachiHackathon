$(document).ready(function() {
   var downloadCount = 0;
   var writer = new window.Writer();
   var links = [];

   function download(callback) {
      var self = this;
      var isJQuery;

      // folder
      console.log(!!$(".dataList").html());
      if($(".vr_mainColumn").children("div:nth-child(4)").html() === "\nサブフォルダなし\n") {
         // nothing
      } else {
         $(".vr_mainColumn").children("div:nth-child(4)").find("a").each(function(item) {
            console.log(this);
            $("body").bind("click", function() {
               console.log(window.location.hash);
               window.location.hash = "hoge";
            });
            window.open(this);
         }, this);
      }

      // data
      if(!!$(".dataList").html()){
         isJQuery = true;

         // call $(this).attr("href");
         var i = 1;
         downloadCount = $(".dataList").find("tbody").children("tr:nth-child(1)").nextAll().children("td:nth-child(2)").find("a").length;
         $(".dataList").find("tbody").children("tr:nth-child(1)").nextAll().children("td:nth-child(2)").find("a").each(function(item) {
            var downloadLink = this;
            setTimeout(function() {
               writer.writeToFile(downloadLink);
               callback();
            }, i * 500);
            i++;
            console.log("loop");
         },this);
         // go to  call jquery 
         console.log("hello world");
      }
   }

   var onFinishedDownload = function() {
      downloadCount--;
      if (downloadCount === 0) {
         window.open('', '_self', '');
         window.close();
      }
   }
   download(onFinishedDownload);
});
