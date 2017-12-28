var link = document.querySelector(".hotel_search_btn");
var searchHotel = document.querySelector(".modal_search");


searchHotel.classList.add("modal_search_close");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchHotel.classList.toggle("modal_search_close")
});