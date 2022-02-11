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