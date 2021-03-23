document.querySelectorAll('.changes-new-or-old').forEach(form => {
    var formData = new FormData();
    const type = form.formBtn.dataset.type;
    let url, id, method;

    form.addEventListener('submit', event => {
        event.preventDefault();
        let arg = $(".changes-new-or-old").serialize().split("&");
        let sendData = {};
        arg.forEach(el => {
            let coupleVar = el.split("=");
            sendData[coupleVar[0]] = coupleVar[1];
            formData.append(coupleVar[0], coupleVar[1]);
        })


        if (type == "add") {
            url = form.formBtn.dataset.url
            method = 'POST';
        }
        if (type == "update") {
            id = form.formBtn.dataset.id;
            url = form.formBtn.dataset.url + id;
            method = 'PATCH';
        }
        
        if (form.formBtn.dataset.photo == "true") {
            formData.append("file", document.querySelector(".upladed").files[0], "image.png");
        }
        
            fetch(url, {
                method: method,
                body: formData,
            }).then(res => {
                if (res.status == 200) {
                    alert("Операция завершина успешно");
                    document.location.reload();
                } else {
                    alert("Что-то пошло не так");
                    document.location.reload();
                }
            });
       
    })
})
