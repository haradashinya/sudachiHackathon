window.Writer = function(){
	this.writeToFile = function(link){
		console.log("called writer");
		console.log(link);

        window.open(link);
	};
};
