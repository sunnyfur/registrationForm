const getErrorDiv = (elem) => {
    let rez = elem.parentElement.querySelector(".form__error");
    if (!rez) rez = elem.parentElement.parentElement.querySelector(".form__error");
    return rez;
};

const addDivError = (elem, message) => {
    getErrorDiv(elem).innerHTML += message + "<br>";
};
const clearDivError = (elem) => {
    getErrorDiv(elem).innerHTML = "";
};

const validateAll = () => {

    let valid = true;

    const chekedValuesAll = document.getElementsByClassName("isRequered");
    for (let i = 0; i < chekedValuesAll.length; i++) {
        !checkField(chekedValuesAll[i]) ? valid = false : "";
    }!checkField(document.getElementById('idPrivacy')) ? valid = false : "";


    if (!document.querySelector('input[name="nameGender"]:checked')) {
        addDivError(document.querySelector('input[name="nameGender"'), "Поле обязательно для заполнения");
        valid = false;
    }

    !checkField(document.getElementById('idBirthDay')) ? valid = false : "";
    !checkField(document.getElementById('idEmail')) ? valid = false : "";
    !checkField(document.getElementById('idEmailCheck')) ? valid = false : "";
    !checkField(document.getElementById('idPassword')) ? valid = false : "";
    !checkField(document.getElementById('idPasswordCheck')) ? valid = false : "";

    if (valid) {
        alert(`Добро пожаловать, ${document.getElementById('idLogin').value}`);
        return true;
    } else {
        alert('Не все поля заполнены корректно!');
        return false;
    }

}

const checkField = (field) => {
    let valid = true;

    clearDivError(field);
    !isCommonValid(field) ? valid = false : "";
    switch (field.id) {
        case "idEmail":
            !isValidEmail(field) ? valid = false : "";
            break;
        case "idEmailCheck":
            !isEqualFields(document.getElementById('idEmail'), document.getElementById('idEmailCheck'), "E-mail не совпадает") ? valid = false : "";
            break;
        case "idPassword":
            !isValidPass(field) ? valid = false : "";
            break;
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



    };



    if (valid) {
        if (field.classList.contains("border-danger")) field.classList.remove("border-danger");
        if (!field.classList.contains("border-success")) field.classList.add("border-success");
        //очистить список
        clearDivError(field);

    } else {

        if (field.classList.contains("border-success")) field.classList.remove("border-success");

        if (!field.classList.contains("border-danger")) field.classList.add("border-danger");


    }
    return valid;
};


// const buttonSubmit = document.getElementById("idSubmitRegistration");
// buttonSubmit.addEventListener("click", validateAll);


const login = document.getElementById('formRegistration');
login.addEventListener("keyup", (event) => checkField(event.target));
login.addEventListener("change", (event) => checkField(event.target));