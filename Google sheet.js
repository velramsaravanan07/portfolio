const scriptURL = 'https://script.google.com/macros/s/AKfycbwwIO_ezjCYJla45Avb9Ixd3NBKzlNoMC-nzGF92LiHWHZh50ccXXh4MeN7Y0lQ-erI/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'post', body: new FormData(form) })
        .then(response => {
            alert("Thank you! Your form has been submitted successfully.");
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message));
});
