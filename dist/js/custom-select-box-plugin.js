(function($) {

    $.fn.customSelectBox = function(options) {

		// Establish our default settings
        var settings = $.extend({
			dropdownClass: "select-box-wrapper",
			dropdownIcon: "default",
            listHeading: "List Items",
			listName: "list_name",
			additionalLinkClass: ""
        }, options);
		// END: Establish our default settings

		/*-----------------Variable Initialization and declarations-----------------*/
		
		var parentWrapperIdValue, parentWrapper, dropDownParentClass, select_ele, option_ele, option_val, option_no, parent_list, listClass, additionalLinkClass;

		dropDownParentClass = settings.dropdownClass;
		additionalLinkClass = settings.additionalLinkClass;
		parentWrapperIdValue = this.attr("id");
		parentWrapper = "#"+parentWrapperIdValue;
		var optionClass = "option-ele",
			itemLinkClasses = "custom-list-item__link dropdown-item",
			customBoxWrapperClasses = "custom-select-box dropdown-wrapper",
			itemListBlockClasses = "custom-select-box-list dropdown-list";
		
			if(additionalLinkClass !== ""){
				customBoxLinkClasses = "custom-select-box-link dropdown-link "+additionalLinkClass;
			}else{
				customBoxLinkClasses = "custom-select-box-link dropdown-link";
			}
		
			customBoxWrapper = "<div class='"+customBoxWrapperClasses+"'></div>",
			selectBoxLink = "<a href='#' class='"+customBoxLinkClasses+"'><span class='span custom-select-box__selected-item current-value'>"+settings.listHeading+"</span></a>",
			downIcon = "<span class='custom-select-box-link__icon'><img class='dropdown-img' src='img/down-arrow.png'></img></span>",
			itemListBlock = "<ul class='"+itemListBlockClasses+"'></ul>",
			itemListElement = "<li class='custom-list-item'></li>",
			itemLinkElement = "<a class='"+itemLinkClasses+"' href='#'></a>";
		
		if(settings.dropdownIcon != "default"){
			downIcon = "<span class='"+settings.dropdownIcon+" custom-select-box-link__icon' aria-hidden='true'></span>";
		}
		
		/*-----------------END: Variable Initialization and declarations-----------------*/
		
		/*-----------------Inserting elements-----------------*/
		
		select_ele = $(this).children("select");
		option_ele = select_ele.find("option");
		option_len = option_ele.length - 1;

		$(this).find("select").addClass("select-box");
		$(this).find("select").attr("name", settings.listName);

		$(this).append(customBoxWrapper);
		$(this).find(".custom-select-box").append(selectBoxLink);
		$(this).find(".custom-select-box-link").append(downIcon);
		$(this).find(".custom-select-box").append(itemListBlock);

		option_ele.each(function(i){
			if(i>0){
				option_val = $(this).val();
				$(this).val(option_val);
				$(this).attr("data-item", "option-"+i);
				$(this).attr("class", optionClass);
				listClass = $(this).parents(parentWrapper).find(".custom-select-box-list");
				listClass.append(itemListElement);
				$(parentWrapper).find(".custom-list-item").each(function(j){
					j++;
					$(this).attr("data-option", "option-"+j);
				});
			}
		});

		$(parentWrapper).find(".custom-list-item").each(function(){
			$(this).append(itemLinkElement);
		});

		option_ele.each(function(i){
			option_val = $(this).val();
			option_no = $(this).attr("data-item");
			listClass.find("li[data-option=option-"+i+"]").children(".dropdown-item").text(option_val);
		});

		/*-----------------END: Inserting elements-----------------*/
			
		//Selecting item from dropdown

		$(parentWrapper+" .custom-list-item .dropdown-item").on("click", function(e){
			e.preventDefault();
			var option_no = $(this).parents(".custom-list-item").attr("data-option");
			var selected_item = $(this).text();
			$(this).parents(".dropdown-wrapper").siblings(".select-box").find("option[data-item="+option_no+"]").prop("selected", true);
			$(this).parents(".dropdown-wrapper").find(".dropdown-link .current-value").text(selected_item);
			$(".dropdown-wrapper").removeClass("open");
			$(".select-box-wrapper .dropdown-list").slideUp();
		});
		
		//END: Selecting item from dropdown

    }
	
	//Open/close dropdown
	
	$(document).on("click", function(e){
		var tar_ele, tar_class;
		var timeDelay = 400, clearTime = 0;
		
		tar_ele = $(e.target);
		tar_class = tar_ele.attr("class");
		
		if(!tar_ele.parents().hasClass("select-box-wrapper")){
			$(".dropdown-wrapper").removeClass("open");
			$(".select-box-wrapper .dropdown-list").slideUp();
		}else{
			if((tar_ele.hasClass("dropdown-link")) || (tar_ele.parents().hasClass("dropdown-link"))){
				e.preventDefault();
				if(!tar_ele.parents(".dropdown-wrapper").hasClass("open")){		//Open the dropdown
					$(".dropdown-wrapper").removeClass("open");
					$(".select-box-wrapper .dropdown-list").slideUp();
					tar_ele.parents(".dropdown-wrapper").addClass("open");
					tar_ele.parents(".dropdown-wrapper").find(".dropdown-list").slideDown();
				}else{																	//Close the dropdown
					$(".dropdown-wrapper").removeClass("open");
					$(".select-box-wrapper .dropdown-list").slideUp();
				}
			}
		}
	});
	
	//END: Open/close dropdown

}(jQuery));