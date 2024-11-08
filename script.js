function validateLogin(event) {
    event.preventDefault(); // Отключаем стандартное поведение формы

    // Получаем значения логина и пароля
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Проверяем логин и пароль
    if (username === "Naiman" && password === "12345") {
        // При правильных данных перенаправляем на другую страницу
        window.location.href = "welcome.html"; // Укажите здесь нужную страницу
    } else {
        // Показать сообщение об ошибке
        errorMessage.textContent = "Неправильный логин или пароль";
        errorMessage.style.display = "block";
    }
}
