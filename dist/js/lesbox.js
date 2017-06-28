var selectDropDownClass;

(function($) {
    $.fn.lesbox = function(options) {

		// Establish our default settings
        var settings = $.extend({
			dropdownIcon: "default",
            listHeading: "List Items",
			listName: "list_name",
			additionalLinkClass: ""
        }, options);
		// END: Establish our default settings

		/*-----------------Variable Initialization and declarations-----------------*/
		
		var parentWrapperIdValue, parentWrapper, dropDownParentClass, select_ele, option_ele, option_val, option_no, parent_list, listClass, additionalLinkClass, itemLinkStyleClass, dropdownLink;
		
		dropDownParentClass = "lesbox-wrapper";
		selectDropDownClass = dropDownParentClass;
		additionalLinkClass = settings.additionalLinkClass;
		parentWrapperIdValue = this.attr("id");
		parentWrapper = "#"+parentWrapperIdValue;
		var optionClass = "option-ele",
			itemLinkStyleClass = "lesbox-list-item",
			itemLinkClasses = itemLinkStyleClass+"__link dropdown-item",
			lesboxWrapperClasses = "lesbox lesbox-dropdown-wrapper",
			itemListBlockClasses = "lesbox-list lesbox-dropdown-list";

			if(additionalLinkClass !== ""){
				customBoxLinkClasses = "lesbox-link lesbox-dropdown-link "+additionalLinkClass;
			}else{
				customBoxLinkClasses = "lesbox-link lesbox-dropdown-link";
			}
		
			customBoxWrapper = "<div class='"+lesboxWrapperClasses+"'></div>",
			selectBoxLink = "<a href='#' class='"+customBoxLinkClasses+"'><span class='span lesbox__selected-item current-value'>"+settings.listHeading+"</span></a>",
			downIcon = "<span class='lesbox-link__icon'><img class='lesbox-icon' src='img/down-arrow.png'></img></span>",
			itemListBlock = "<ul class='"+itemListBlockClasses+"'></ul>",
			itemListElement = "<li class='"+itemLinkStyleClass+"'></li>",
			itemLinkElement = "<a class='"+itemLinkClasses+"' href='#'></a>";
		
		if(settings.dropdownIcon != "default"){
			downIcon = "<span class='"+settings.dropdownIcon+" lesbox-link__icon' aria-hidden='true'></span>";
		}
		
		/*-----------------END: Variable Initialization and declarations-----------------*/
		
		/*-----------------Inserting elements-----------------*/
		
		select_ele = $(this).children("select");
		option_ele = select_ele.find("option");
		option_len = option_ele.length - 1;

		$(this).find("select").addClass("select-box");
		$(this).find("select").attr("name", settings.listName);

		$(this).append(customBoxWrapper);
		$(this).find(".lesbox").append(selectBoxLink);
		$(this).find(".lesbox-link").append(downIcon);
		$(this).find(".lesbox").append(itemListBlock);

		option_ele.each(function(i){
			if(i>0){
				option_val = $(this).val();
				$(this).val(option_val);
				$(this).attr("data-item", "option-"+i);
				$(this).attr("class", optionClass);
				listClass = $(this).parents(parentWrapper).find(".lesbox-list");
				listClass.append(itemListElement);
				$(parentWrapper).find("."+itemLinkStyleClass).each(function(j){
					j++;
					$(this).attr("data-option", "option-"+j);
				});
			}
		});

		$(parentWrapper).find("."+itemLinkStyleClass).each(function(){
			$(this).append(itemLinkElement);
		});

		option_ele.each(function(i){
			option_val = $(this).val();
			option_no = $(this).attr("data-item");
			listClass.find("li[data-option=option-"+i+"]").children(".dropdown-item").text(option_val);
		});
		
		$("#"+parentWrapperIdValue+" option").each(function(i){
			dropdownLink = $(this).attr("data-href");
			if(dropdownLink){
				$("."+itemLinkStyleClass+"[data-option=option-"+i+"] .dropdown-item").attr("href", dropdownLink);
			}
		});

		/*-----------------END: Inserting elements-----------------*/
			
		//Selecting item from dropdown

		$(parentWrapper+" ."+itemLinkStyleClass+" .dropdown-item").on("click", function(e){
			var option_no = $(this).parents("."+itemLinkStyleClass).attr("data-option");
			var selected_item = $(this).text();
			$(this).parents(".lesbox-dropdown-wrapper").siblings(".select-box").find("option[data-item="+option_no+"]").prop("selected", true);
			$(this).parents(".lesbox-dropdown-wrapper").find(".lesbox-dropdown-link .current-value").text(selected_item);
			$(".lesbox-dropdown-wrapper").removeClass("open");
			$("."+dropDownParentClass+" .lesbox-dropdown-list").slideUp();
		});
		
		//END: Selecting item from dropdown
    }
	
	//Open/close dropdown
	
	$(document).on("click", function(e){
		var tar_ele, tar_class,
			timeDelay = 400, clearTime = 0;
		
		tar_ele = $(e.target);
		tar_class = tar_ele.attr("class");
		
		if(!tar_ele.parents().hasClass(selectDropDownClass)){
			$(".lesbox-dropdown-wrapper").removeClass("open");
			$("."+selectDropDownClass+" .lesbox-dropdown-list").slideUp();
		}else{
			if((tar_ele.hasClass("lesbox-dropdown-link")) || (tar_ele.parents().hasClass("lesbox-dropdown-link"))){
				
				if(!tar_ele.parents(".lesbox-dropdown-wrapper").hasClass("open")){		//Open the dropdown
					$(".lesbox-dropdown-wrapper").removeClass("open");
					$("."+selectDropDownClass+" .lesbox-dropdown-list").slideUp();
					tar_ele.parents(".lesbox-dropdown-wrapper").addClass("open");
					tar_ele.parents(".lesbox-dropdown-wrapper").find(".lesbox-dropdown-list").slideDown();
				}else{																	//Close the dropdown
					$(".lesbox-dropdown-wrapper").removeClass("open");
					$("."+selectDropDownClass+" .lesbox-dropdown-list").slideUp();
				}
			}
		}
	});
	
	//END: Open/close dropdown

}(jQuery));