const isEqualFields = (field1, field2, textError) => {
    if (field1.value != field2.value) {
        addDivError(field2, textError);
        return false;
    } else {
        addDivError(field2, "");
        return true;
    }
};

const isValidAge = (birthday) => {
    const d = new Date();
    d.setFullYear(d.getFullYear() - 18);

    if (birthday.value && (d < new Date(birthday.value))) {
        addDivError(birthday, "Регистрация только с 18 лет");
        return false;
    } else {
        addDivError(birthday, "");
        return true;
    }
};
const isValidEmail = (email) => {
    const validEmail = /[a-zA-Z_\d\.-]+@[a-zA-Z_\-]+(\.[a-zA-Z]+){1,6}/;
    if (!validEmail.test(email.value)) {
        addDivError(email, "Не корректно введен E-mail");
        return false;
    } else {
        addDivError(email, "");
        return true;
    }
};

const isValidPass = (pass) => {
    const validpass = /(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[^\da-zA-Zа-яА-Я\s])(?!.*\s).{8,}/;
    if (!validpass.test(pass.value)) {
        addDivError(pass, "Пароль должен быть больше 8 знаков, содержать хотя бы одну заглавную букву, одну цифру и спец символ");
        return false;
    } else {
        addDivError(pass, "");
        return true;
    }
};

const isCommonValid = (field) => {

    const errors = [];
    const checkValidity = (input) => {
        const validity = input.validity;
        if (validity.patternMismatch) {
            errors.push('Неверный формат заполнения');
        }
        if (validity.rangeOverFlow) {
            const max = input.max;
            errors.push(`Максимальное значение не может быть больше чем ${max}`);
        }
        if (validity.rangeUnderFlow) {
            const min = input.min;
            errors.push(`Минимальное значение не может быть больше чем ${min}`);
        }
        if (validity.tooLong) {
            const max = input.maxLength;
            errors.push(`Превышен лимит введенных символов (${max})`);
        }
        if (validity.tooShort) {
            const min = input.minLength;
            errors.push(`Слишком мало символов. Минимальное количество: ${min}`);
        }
        if (validity.valueMissing) {
            errors.push('Поле обязательно для заполнения');
        }
    };
    checkValidity(field);
    addDivError(field, errors.join("<br>"));
    return (errors.length > 0) ? false : true;
};