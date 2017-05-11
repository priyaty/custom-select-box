$(document).ready( function() {
	
    $('#food-list').lesbox({
		listHeading: "Food Item",
		listName: "food",
		dropdownIcon: "fa fa-angle-down"
	});
	
	$('#cars-list').lesbox({
		listHeading: "Cars",
		listName: "cars",
		additionalLinkClass: "cars-text-style"
	});
	
	$('#country-list').lesbox({
		listHeading: "Country list",
		listName: "countries",
		additionalLinkClass: "country-text-style"
	});
	
});