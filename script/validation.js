document.addEventListener("DOMContentLoaded", function () {
	let errorAdded = false;
	const form = document.getElementById("form");
	const element = document.createElement("p");
	element.textContent = "Email does not match";
	const element2 = document.querySelector(".contact_content");
	const email1 = document.getElementById("email");
	const email_confirm = document.getElementById("email_confirm");
	element.style.margin = "0";
	element.style.color = "#d14539";
  
	form.addEventListener("submit", function (e) {
		e.preventDefault();

		if (email1.value !== email_confirm.value) {
			if (!errorAdded) {
				element2.parentNode.insertBefore(element, element2);
				element.classList.add("alert");
				errorAdded = true;
        email_confirm.style.backgroundColor = "rgba(230,169,171,.5)";
			}
		} else {
			if (errorAdded) {
				element.remove();
				errorAdded = false;
        email_confirm.style.backgroundColor = "";
			}
		}
	});
});