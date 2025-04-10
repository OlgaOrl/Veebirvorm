$(document).ready(function() {
    console.log("jQuery is working!");

    // Попытка прочитать данные из localStorage
    let savedName = localStorage.getItem("name");
    let savedEmail = localStorage.getItem("email");
    let savedAge = localStorage.getItem("age");

    // Если есть сохраненные данные, можно предзаполнить форму
    if (savedName) $("#name").val(savedName);
    if (savedEmail) $("#email").val(savedEmail);
    if (savedAge) $("#age").val(savedAge);

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

        // Показываем div и меняем картинку на случайную
        $("#successMessage").fadeIn();

        // Изменяем src на разные картинки
        let randomImages = [
            "images/success.jpg",
            "images/success2.jpg",
            "images/success3.jpg"
        ];
        let randomImageSrc = randomImages[Math.floor(Math.random() * randomImages.length)];
        $("#successImage").attr("src", randomImageSrc);
    });
});