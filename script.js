function sendMail() {
    (function(){
        emailjs.init("cYf8n6PAjm4Bj7T3E")
    })();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var numberInput = document.getElementById('number');
    var submitButton = document.getElementById("submit-btn"); // Кнопка відправлення
    var spinner = document.getElementById("spinner"); // Крутілка



    // Перевірка на порожні поля
    var isValid = true;

    // Функція для перевірки інпуту
    function validateInput(input) {
        if (!input.value.trim()) {
            input.style.borderColor = "red";
            document.getElementById("fill-warning-hidden").style.display='block';// Змінюємо колір рамки
            isValid = false;
        } else {
            input.style.borderColor = ""; // Повертаємо колір до стандартного
        }
    }

    validateInput(nameInput);
    validateInput(emailInput);
    validateInput(numberInput);


    // Якщо хоча б один інпут порожній, не відправляємо форму
    if (!isValid) {

        return;
    }


    // Показуємо завантаження
    spinner.style.display = "flex"; // Показує// мо крутілку
    document.getElementById("form-block").style.display = "none";


    // Параметри для відправки
    var params = {
        from_name: nameInput.value,
        from_email: emailInput.value,
        from_number: numberInput.value,
    };

    // Відправка через emailjs
    emailjs
        .send("service_gmzkx1u", "template_g897ybk", params)
        .then((res) => {
            // Ховаємо форму та показуємо блок із повідомленням
            document.getElementById("form-block").style.display = "none";
            document.getElementById("success-block").style.display = "flex";
        }).finally(() => {
            // Приховуємо крутілку та вмикаємо кнопку
            spinner.style.display = "none";
        });
}

function sendMail1() {
    (function(){
        emailjs.init("cYf8n6PAjm4Bj7T3E")
    })();

    var nameInput = document.getElementById('name1');
    var emailInput = document.getElementById('email1');
    var numberInput = document.getElementById('number1');
    var submitButton = document.getElementById("submit-btn1"); // Кнопка відправлення
    var spinner = document.getElementById("spinner1"); // Крутілка



    // Перевірка на порожні поля
    var isValid = true;

    // Функція для перевірки інпуту
    function validateInput(input) {
        if (!input.value.trim()) {
            input.style.borderColor = "red";
            document.getElementById("fill-warning-hidden1").style.display='block';// Змінюємо колір рамки
            isValid = false;
        } else {
            input.style.borderColor = ""; // Повертаємо колір до стандартного
        }
    }

    validateInput(nameInput);
    validateInput(emailInput);
    validateInput(numberInput);


    // Якщо хоча б один інпут порожній, не відправляємо форму
    if (!isValid) {

        return;
    }


    // Показуємо завантаження
    spinner.style.display = "flex"; // Показує// мо крутілку
    document.getElementById("form-block1").style.display = "none";


    // Параметри для відправки
    var params = {
        from_name: nameInput.value,
        from_email: emailInput.value,
        from_number: numberInput.value,
    };

    // Відправка через emailjs
    emailjs
        .send("service_gmzkx1u", "template_g897ybk", params)
        .then((res) => {
            // Ховаємо форму та показуємо блок із повідомленням
            document.getElementById("form-block1").style.display = "none";
            document.getElementById("success-block1").style.display = "flex";
        }).finally(() => {
        // Приховуємо крутілку та вмикаємо кнопку
        spinner.style.display = "none";
    });
}



// ScrollMagic Scenes
const controller = new ScrollMagic.Controller();

const scenes = [
    { trigger: "#trigger1", target: "#reveal" },
    { trigger: "#trigger2", target: "#reveal1" },
    { trigger: "#trigger4", target: "#reveal4", offset: 100 },
];

scenes.forEach(({ trigger, target, offset = 0 }) => {
    new ScrollMagic.Scene({ triggerElement: trigger, reverse: false, offset })
        .setClassToggle(target, "visible")
        .addTo(controller);
});

// PopUp functions
$(document).ready(() => {
    $("#popup1").hide();
});

function PopUpShow() {
    $("#popup1").show();
}

function PopUpHide() {
    $("#popup1").hide();
}

// Image slider
const images = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => img.classList.toggle('active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showImage(currentIndex);
    });
});

// Smooth scrolling for elements with data-target
function setupSmoothScrolling() {
    document.querySelectorAll('[data-target]').forEach(el => {
        el.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

setupSmoothScrolling();
