$(document).on("click", function(e){
	var tar_ele = $(e.target);
	var tar_class = tar_ele.attr("class");

		console.log("target element: "+tar_class);
	if(!tar_ele.parents().hasClass("select-box-wrapper")){
//				console.log("clicked outside dropdown");

		$(".dropdown-wrapper").removeClass("open");

		$(".select-box-wrapper .dropdown-list").slideUp();
	}else{
//				console.log("clicked inside dropdown");
		if((tar_ele.hasClass("dropdown-link")) || (tar_ele.parents().hasClass("dropdown-link"))){
			e.preventDefault();
			$(".dropdown-wrapper").removeClass("open");
			$(".select-box-wrapper .dropdown-list").slideUp();
			//tar_ele.parents(".dropdown-wrapper").addClass("open");
			if(tar_ele.parents(".dropdown-wrapper").hasClass("open")){
//						tar_ele.parents(".dropdown-wrapper").removeClass("open");
//						$(parentWrapper+" .dropdown-list").slideUp();
				console.log("slide up");
			}else{
//						$(".dropdown-wrapper").removeClass("open");
//						$(parentWrapper+" .dropdown-list").slideUp();
				tar_ele.parents(".dropdown-wrapper").addClass("open");
				tar_ele.parents(".dropdown-wrapper").find(".dropdown-list").slideDown();
				console.log("slide down");
			}
		}
	}
});