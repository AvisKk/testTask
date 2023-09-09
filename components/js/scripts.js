/*Скрипт для разворачивания кнопок*/
function hide(idButton, idMore, idImage) {

    /*Определение задействованных компонентов*/
    let image = document.getElementById(idImage);
    let button = document.getElementById(idButton);
    let more = document.getElementById(idMore)

    /*Открытие/закрытие подробной информации при клике*/
    if (more.style.display === 'none') {
        more.style.display = ''
        button.classList.add("opened")
        image.src = "images/Vector%2011%20(1).png"
    } else {
        more.style.display = 'none'
        image.src = "images/Vector%2011.png"
    }

    /*Закрытие подробной информации при клике в любое место на экране*/
    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(button);
        if (!click) {
            more.style.display = "none"
            image.src = "images/Vector%2011.png"
        }
    })
}
