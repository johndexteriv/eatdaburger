$(function () {
	$(".devour").on("click", function (event) {
		var id = $(this).data("id");
		console.log(id);

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
		}).then(function () {
			console.log(`The Burger with ${id} id was devoured`);

			location.reload();
		});
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
	$(".delete").on("click", function (event) {
		event.preventDefault();
		var id = $(this).data("id");
		console.log(id);

		$.ajax("/api/burgers/" + id, {
			type: "DELETE",
		}).then(function () {
			console.log(`The Burger with ${id} was deleted`);
			location.reload();
		});
	});
});
