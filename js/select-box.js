$(document).ready( function() {
	
	var time_delay = 1000;
	
    $('#food-list').customSelectBox({
		listHeading: "Food Item",
		listName: "food"
	});
	
	$('#cars-list').customSelectBox({
		listHeading: "Cars",
		listName: "cars"
	});
	
	$('#country-list').customSelectBox({
		listHeading: "Country list",
		listName: "countries"
	});
	
});