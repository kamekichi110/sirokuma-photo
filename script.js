function modal(window) {
	var id = "index" + window;
	var index = document.getElementById(id);
	index.style.display = "block";
}
function closeModal(window) {
	var id = "index" + window;
	var index = document.getElementById(id);
	index.style.display = "none";
}