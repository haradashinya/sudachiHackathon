


$(document).ready(function() {
	var writer = new window.Writer();
	console.log(writer);
	var links = [];

	function download() {
		var self = this;
		var isJQuery;

		console.log(!!$(".dataList").html());
		if(!!$(".dataList").html()){

			isJQuery = true;

			// call $(this).attr("href");
			$(".dataList").find("tbody").children("tr:nth-child(1)").nextAll().children("td:nth-child(2)").find("a").each(function(item) {
				writer.writeToFile($(this).attr("href"));
				
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






	download();
});
	






