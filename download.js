


$(document).ready(function() {
	console.log("helllo world");
	var writer = new window.Writer();
	

	function download() {
		var self = this;
		$(".dataList").find("tbody").children("tr:nth-child(1)").nextAll().children("td:nth-child(2)").find("a").each(function(item) {
				 // writer.writeToFile(item);

			// if ($(this).attr("href"))
			// 	targetLinks.push($(this).attr("href")
			// 	);
		}, this);
	}

	download();
});
	






