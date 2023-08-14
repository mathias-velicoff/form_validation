// $(function () {
// 	$("#drop_menu_btn").on("click", function () {
// 		$(".drop_menu").toggle("500", "linear");
// 	});
// });

function drop() {
	$("#drop_menu_btn").on("click", funcToggle);
}

function funcToggle() {
	$("#drop_menu").toggle("500", "linear");
}

$(function () {
	drop();
});
