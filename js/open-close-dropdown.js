$(document).on("click", function(e){
	var tar_ele = $(e.target);
	var tar_class = tar_ele.attr("class");

	if(!tar_ele.parents().hasClass("select-box-wrapper")){
		$(".dropdown-wrapper").removeClass("open");
		$(".select-box-wrapper .dropdown-list").slideUp();
	}else{
		if((tar_ele.hasClass("dropdown-link")) || (tar_ele.parents().hasClass("dropdown-link"))){
			e.preventDefault();
			$(".dropdown-wrapper").removeClass("open");
			$(".select-box-wrapper .dropdown-list").slideUp();
			if(!tar_ele.parents(".dropdown-wrapper").hasClass("open")){
				tar_ele.parents(".dropdown-wrapper").addClass("open");
				tar_ele.parents(".dropdown-wrapper").find(".dropdown-list").slideDown();
			}
		}
	}
});