document.querySelectorAll(".login-form").forEach(form =>{
    form.addEventListener('submit', event=>{
        event.preventDefault();
        
        const user = {
            login:form.login.value,
            password:form.password.value
        };
        
        fetch("/fitisova/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        }).then(res => {
            if (res.status != 200) {
                alert("Неверные данные для входа");
                return;
            }{
                alert("Добро пожаловать");
                location.href = "/fitisova/admin";
            }
        });
    })
});
