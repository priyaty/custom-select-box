$(document).ready( function() {
	
	var time_delay = 1000;
	
    $('#food-list').customSelectBox({
		listHeading: "Food Item",
		listName: "food"
	});
	
	setTimeout(function(){
		$('#cars-list').customSelectBox({
			listHeading: "Cars",
			listName: "cars"
		});
	}, time_delay);
	
	setTimeout(function(){
		$('#country-list').customSelectBox({
			listHeading: "Country list",
			listName: "countries"
		});
	}, time_delay + 1000);
});