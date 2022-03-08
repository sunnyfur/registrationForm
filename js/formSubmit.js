document.getElementById("formRegistration").addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateAll()) {

        const form = {
            login: document.getElementById("idLogin").value,
            FIO: document.getElementById("idSurname").value,
            birthday: document.getElementById("idBirthDay").value,
            gender: document.querySelector("input[name='nameGender']:checked").value,
            number: document.getElementById("idTel").value,
            mail: document.getElementById("idEmail").value,
            password: document.getElementById("idPassword").value

        }
        console.log(form);

        fetch("https://httpbin.org/post", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(form)
            })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));

    }
});