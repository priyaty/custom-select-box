$(document).ready( function() {
	
    $('#food-list').customSelectBox({
		listHeading: "Food Item",
		listName: "food",
		dropdownIcon: "fa fa-angle-down"
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