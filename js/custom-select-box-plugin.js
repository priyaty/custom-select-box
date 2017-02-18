(function($) {

    $.fn.customSelectBox = function(options) {

		// Establish our default settings
        var settings = $.extend({
            listHeading: "List Items",
			listName: "list_name",
			dropdownFontFamily: "cursive"
        }, options);
		// END: Establish our default settings

		var parentWrapper, select_ele, option_ele, option_val, option_no, parent_list;

		parentWrapper = this.attr("id");
		parentWrapper = "#"+parentWrapper;
		var itemLinkClasses = "custom-list-item__link dropdown-item";
		var customBoxWrapperClasses = "custom-select-box dropdown-wrapper";
		var itemListBlockClasses = "custom-select-box-list dropdown-list";
		var customBoxLinkClasses = "custom-select-box-link dropdown-link";

		var customBoxWrapper = "<div class='"+customBoxWrapperClasses+"'></div>";
		var selectBoxLink = "<a href='#' class='"+customBoxLinkClasses+"'><span class='span custom-select-box__selected-item current-value'>"+settings.listHeading+"</span></a>";
		var downIcon = "<i class='fa fa-angle-down' aria-hidden='true'></i>";
		var itemListBlock = "<ul class='"+itemListBlockClasses+"'></ul>";
		var itemListElement = "<li class='custom-list-item'></li>";
		var itemLinkElement = "<a class='"+itemLinkClasses+"' href='#'></a>";
		
        this.each( function() {
			select_ele = $(this).children("select");
			option_ele = select_ele.find("option");
			option_len = option_ele.length - 1;

			$(this).find("select").addClass("select-box");
			$(this).find("select").attr("name", settings.listName);

			$(this).append(customBoxWrapper);
			$(".custom-select-box").append(selectBoxLink);
			$(".custom-select-box-link").append(downIcon);
			$(".custom-select-box").append(itemListBlock);

			option_ele.each(function(i){
				if(i>0){
					option_val = $(this).val();
					$(this).val(option_val);
					$(this).attr("data-item", "option-"+i);
					listClass = $(this).parents(parentWrapper).find(".custom-select-box-list");
					listClass.append(itemListElement);
					$(".custom-list-item").each(function(j){
						j++;
						$(this).attr("data-option", "option-"+j);
					});
				}
			});

			$(".custom-list-item").each(function(){
				$(this).append(itemLinkElement);
			});

			option_ele.each(function(i){
				option_val = $(this).val();
				option_no = $(this).attr("data-item");
				listClass.find("li[data-option=option-"+i+"]").children(".dropdown-item").text(option_val);
			});

        });

		
		//Default Properties
		
		this.find("*").css("fontFamily", settings.dropdownFontFamily);
		
		//Open/close dropdown
		
		$(".dropdown-link").on("click", function(e){
			e.preventDefault();
			$(this).parents(".dropdown-wrapper").children(".dropdown-list").slideToggle();
		});

		//Selecting item from dropdown

		$(".custom-list-item .dropdown-item").on("click", function(e){
			e.preventDefault();
			var option_no = $(this).parents(".custom-list-item").attr("data-option");
			var selected_item = $(this).text();
			$(this).parents(".dropdown-wrapper").siblings(".select-box").find("option[data-item="+option_no+"]").prop("selected", true);
			$(this).parents(".dropdown-wrapper").find(".dropdown-link .current-value").text(selected_item);
		});

    }

}(jQuery));