$(function () {
	$(".devour").on("click", function (event) {
		var id = $(this).data("id");
		console.log(id);
	});
	$(".create-form").on("submit", function (event) {
		event.preventDefault();

		var newBurger = {
			name: $("#burgername").val().trim(),
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger,
		}).then(function () {
			console.log("created new burger");
			location.reload();
		});
	});
});
