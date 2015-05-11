var cats = [
		{
			"name" : "Poplinre",
			"pic" : "images/Cat1.jpg",
			"id" : "cat1",
			"counter":"count1"
		},
		{
			"name" : "Chewie",
			"pic" : "images/Cat2.jpg",
			"id" : "cat2",
			"counter" : "count2"
		},
		{
			"name":"Chauncey",
			"pic":"images/Cat3.jpg",
			"id":"cat3",
			"counter":"count3"
		},
		{
			"name":"Java",
			"pic":"images/Cat4.jpg",
			"id":"cat4",
			"counter":"count4"
		},
		{
			"name":"Dylan",
			"pic":"images/Cat5.jpg",
			"id":"cat5",
			"counter":"count5"
		}
];
var HTMLstart = "<div class='cat-entry'></div>"
var HTMLname = "<div class = 'name'><h2>%data%</h2></div>";
var HTMLcount = "<p id='%data%'> 0 </p></div>";
var HTMLimg = "<img id='%iddata%' src='%data%' alt='This is a picture of a cat.'></img>";

/*for (i=0; i<cats.length; i++){
	var counterName = "#"+cats[0].counter;
	var formattedName = HTMLname.replace('%data%', cats[0].name);
	var formattedID = HTMLimg.replace('%iddata%', cats[0].id);
	var formattedImg = formattedID.replace('%data%', cats[0].pic);
	var formattedCount = HTMLcount.replace('%data%', cats[0].counter);
	var catID = "#'" +  cats[0].id+"'";
	var formattedClicker = '<script>$('+catID+
		').click(function(e) {var count =Number($('+counterName+
		').html())+1;$('+counterName+').html(count);});</script>';

	$('#cats').append(HTMLstart);
	$('#cat-entry:last').append(formattedName);
	$('#cat-entry:last').append(formattedImg);
	$('#cat-entry:last').append(formattedCount);
	$('#cat-entry:last').append(formattedClicker);
}*/
	$('#cats').append("<div class='cat-entry'></div>");
	$('#cat-entry:last').append("<div class = 'name'><h2>Grey</h2></div>");
	$('#cat-entry:last').append("<img id='cat1' src='images/cat1.jpg' alt='This is a picture of a cat.'></img>");
	$('#cat-entry:last').append("<p id='count1'> 0 </p></div>");
	$('#cat-entry:last').append("<script>$('#cat2').click(function(e) {var count =Number($('#count1').html())+1;$('#count1').html(count);});</script>");