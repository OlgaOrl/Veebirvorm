$(document).ready(function() {
    console.log("jQuery is working!");

    $("#myForm").submit(function(event) {
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let age = $("#age").val().trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "" || email === "" || age === "") {
            alert("Kõik väljad peavad olema täidetud!");
            return;
        }
        if (!emailPattern.test(email)) {
            alert("E-post on vales vormingus!");
            return;
        }

        // Сохраняем данные в localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("age", age);

        console.log("Andmed salvestatud:", { name, email, age });

        // Показываем div и меняем картинку
        $("#successMessage").fadeIn();
        $("#successImage").attr("src", "images/success.jpg");
    });
});
