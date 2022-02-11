const getErrorDiv = (elem) => {
    let rez = elem.parentElement.querySelector(".form__error");
    if (!rez) rez = elem.parentElement.parentElement.querySelector(".form__error");
    return rez;
};

const addDivError = (elem, message) => {
    getErrorDiv(elem).innerHTML = message;
};

const validateAll = () => {

    let valid = true;

    const chekedValuesAll = document.getElementsByClassName("isRequered");
    for (let i = 0; i < chekedValuesAll.length; i++) {
        checkField(chekedValuesAll[i]) ? valid = false : "";
    }
    checkField(document.getElementById('idPrivacy')) ? valid = false : "";


    if (!document.querySelector('input[name="nameGender"]:checked')) {
        addDivError(document.querySelector('input[name="nameGender"'), "Поле обязательно для заполнения");
        valid = false;
    }

    checkField(document.getElementById('idBirthDay')) ? valid = false : "";
    checkField(document.getElementById('idEmail')) ? valid = false : "";
    checkField(document.getElementById('idEmailCheck')) ? valid = false : "";
    checkField(document.getElementById('idPassword')) ? valid = false : "";
    checkField(document.getElementById('idPasswordCheck')) ? valid = false : "";

    if (valid) {
        alert(`Добро пожаловать, ${document.getElementById('idLogin').value}`);
    } else {
        alert('Не все поля заполнены корректно!');
    }

}

const checkField = (field) => {
    let valid = true;
    switch (field.id) {
        // case "idEmail":
        //     numerr += !isValidEmail(field);
        //     break;
        case "idEmailCheck":
            !isEqualFields(document.getElementById('idEmail'), document.getElementById('idEmailCheck'), "E-mail не совпадает") ? valid = false : "";
            break;
            // case "idPassword":
            //     numerr += !isValidPass(field);
            //     break;
        case "idPasswordCheck":
            !isEqualFields(document.getElementById('idPassword'), document.getElementById('idPasswordCheck'), "Пароль не совпадает") ? valid = false : "";
            break;
        case "idBirthDay":
            !isValidAge(field) ? valid = false : "";
            break;
        case "idPrivacy":
            if (field.checked) {
                addDivError(field, "");
            } else {
                valid = false;
                addDivError(field, "Нужно принять политику конфиденциальности");
            };
            break;
        default:
            addDivError(field, "");

    }
    isCommonValid(field) ? valid = false : "";

    // if (!field.value && field.classList.contains("isRequered")) {
    //     numerr++;
    //     addDivError(field, "Поле обязательно для заполнения");
    // };

    return valid;
};


const buttonSubmit = document.getElementById("idSubmitRegistration");
buttonSubmit.addEventListener("click", validateAll);


const login = document.getElementById('formRegistration');
login.addEventListener("keyup", (event) => checkField(event.target));
login.addEventListener("change", (event) => checkField(event.target));