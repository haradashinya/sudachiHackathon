$(document).ready(function() {
   var downloadCount = 0;
   var folderCount = 0;
   var writer = new window.Writer();
   var fileLinks = [];
   var folderLinks = [];

   function download(callback) {
      var self = this;

      // folder
      var folderLink = $(".vr_mainColumn").children("div:nth-child(4)");
      if(folderLink.html() !== "\nサブフォルダなし\n") {
         folderLink.find("a").each(function(item) {
            console.log("folder=" + this);
            folderLinks.push(this);
         }, this);
         folderCount = folderLink.find("a").length;
      }

      // file
      if(!!$(".dataList").html()){
         var fileLink = $(".dataList").find("tbody").children("tr:nth-child(1)").nextAll().children("td:nth-child(2)").find("a")
         fileLink.each(function(item) {
            console.log("file=" + this);
            fileLinks.push(this);
         }, this);
         downloadCount = fileLink.length;

         callback();
      }
   }

   var isFileLinkExist = function() {
      if (fileLinks.length !== 0) {
         return true;
      } else {
         return false;
      }
   }

   var downloadFile = function() {
      var filelink = fileLinks.pop();
      console.log("download(" + filelink + ")");
      writer.writeToFile(filelink);
   }

   var openNextFolder = function() {
      if (folderLinks.length !== 0) {
         var i = 0;
         folderLinks.forEach(function(folderLink) {
            setTimeout(function() {
               console.log("open folderLink=" + folderLink);
               window.open(folderLink);

               folderCount--;
               if (folderCount <= 0) {
                  window.open('', '_self', '');
                  window.close();
               }
            }, i * 3000);
            i++;
         }, this);
      } else {
         window.open('', '_self', '');
         window.close();
      }
   }

   var onDownload = function() {
      if (isFileLinkExist()) {
         downloadFile();
         onDownload();
         downloadCount--;
      }

      if (downloadCount <= 0) {
         openNextFolder();
      }
   }
   download(onDownload);
});
