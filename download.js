


$(document).ready(function() {
    var downloadCount = 0;
	var writer = new window.Writer();
	console.log(writer);
	var links = [];

	function download(callback) {
		var self = this;
		var isJQuery;

		console.log(!!$(".dataList").html());
        // folder
        if($(".vr_mainColumn").children("div:nth-child(4)").html() === "\nサブフォルダなし\n") {
           alert("not found");
        } else {
           alert("find");
        }

        // data
		if(!!$(".dataList").html()){

			isJQuery = true;

			// call $(this).attr("href");
            var i = 1;
			$(".dataList").find("tbody").children("tr:nth-child(1)").nextAll().children("td:nth-child(2)").find("a").each(function(item) {
               downloadCount++;
               var downloadLink = this;
               setTimeout(function() {
			     writer.writeToFile(downloadLink);
                 callback();
               }, i * 300);
               i++;
               console.log("loop");
			},this);
			// go to  call jquery 
			console.log("hello world");
		}else{
			links = ["<a href='https://github.com/okamurayasuyuki/sudachiHackathon/archive/master.zip'>this is a sample link</a>"];


			links.map(function(link){
				var linkStr = $(link).attr("href");
				writer.writeToFile(linkStr);
			},this);

			console.log("Else");

		}

	}

    var onFinishedDownload = function() {
        downloadCount--;
        if (downloadCount === 0) {
            alert("finished");
        }
    }
	download(onFinishedDownload);
});






