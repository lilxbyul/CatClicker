/*var cats = [
		{
			"name" : "Poplinre",
			"pic" : "images/Cat1.jpg",
			"id" : "cat1",
			"counter":"count2"
		},
		{
			"name" : "Chewie",
			"pic" : "images/Cat2.jpg",
			"id" : "cat2",
			"counter" : "count1"
		}
];

var HTMLname = "<div class = 'name'><h2>%data%</h2></div>";
var HTMLcount = "<p id='%data%'> 0 </p></div>";
var HTMLimg = "<img id='%iddata%' src='%data%' alt='This is a picture of a cat.'></img>";

for (i=0; i<cats.length; i++){
	var counterName = "#"+cats[i].counter;
	var formattedName = HTMLname.replace('%data%', cats[i].name);
	var formattedID = HTMLimg.replace('%iddata%', cats[i].id);
	var formattedImg = formattedID.replace('%data%', cats[i].pic);
	var formattedCount = HTMLcount.replace('%data%', cats[i].counter);

	$('#cat-entry:last').append(formattedName);
	$('#cat-entry:last').append(formattedImg);
	$('#cat-entry:last').append(formattedCount);

	var catID = "#" +  cats[i].id;
		
	$(catID).click(function(e) {
	 	var count =Number($(counterName).html())+1;
	 	$(counterName).html(count);
	});
}*/

$('#cat1').click(function(e) {
 	var count =Number($("#count1").html())+1;
 	$("#count1").html(count);
});