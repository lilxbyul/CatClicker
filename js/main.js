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

var cats = $(".cat");
var buttons = $("button");

function hideAll(){
	for (var i=0;i<cats.length; i++){
		$(cats[i].hide());
	}
}

function buttonToCat(idNumber){
	$('#button'+idNumber).click(function(){
		hideAll();
		$('#cat'+idNumber).show();
	})
}

function counterToCat(idNumber){
	var cat = "#cat"+idNumber;
	$(cat).click(function(){
		var count = $(cat+"> .counter").text();
		count = parseInt(count)+1;
		$(cat+">.counter").text(count);
	})
}

for (var i=1; i<=buttons.length; i++){
	buttonToCat(i);
}

for (var i=1;i<=cat.length; i++){
	counterToCat(i);
}

hideAll();
$("#cat1").show();
