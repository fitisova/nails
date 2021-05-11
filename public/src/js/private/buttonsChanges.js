document.querySelectorAll(".button-form").forEach(form => {
    let id;
    let name;
    let urlUpdate;
    let urlDelete;

    if (form.updateEntity != undefined) {
        id = form.updateEntity.dataset.idEntity;
        name = form.updateEntity.dataset.name;
        urlUpdate = form.updateEntity.dataset.urlEntity;

        form.updateEntity.addEventListener('click', () => {
            fetch(urlUpdate + id, {
                    method: 'GET'
                })
                .then(() => {
                    document.location.href = urlUpdate + id;
                });
        });
        urlDelete = form.deleteEntity ? form.deleteEntity.dataset.urlEntity : "NaN";
    } else {
        id = form.deleteEntity.dataset.idEntity;
        name = form.deleteEntity.dataset.name;
        urlDelete = form.deleteEntity.dataset.urlEntity;
    }

    if (form.deleteEntity) {
        form.deleteEntity.addEventListener('click', () => {
            if (confirm(`Вы уверены что хотите удалить эллемент ${name}?`)) {
                fetch(urlDelete + id, {
                    method: 'DELETE'
                }).then(result => {
                    if (result.status == 200) {
                        document.location.reload();
                    } else {
                        alert('Упс! кажется что то сломалось');
                    }
                });
            }
        });
    } else {
        return;
    }

})