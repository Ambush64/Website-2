$(document).ready(function(){
	var navlinks = document.querySelector(".showmenu");
	var nav = document.querySelector(".nav-links")
	$(navlinks).click(function(){
		$(nav).show(1500)	
	})

	var navhide =document.querySelector(".hidemenu")

	$(navhide).click(function(){
		$(nav).hide(1500)
	})
})
