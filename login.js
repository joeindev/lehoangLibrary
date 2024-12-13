document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    if (isValidDate(dob)) {
        localStorage.setItem('user', name);
        window.location.href = 'library.html';
    } else {
        document.getElementById('notification').innerText = 'Ngày tháng năm sinh bất thường.';
    }
});

function isValidDate(date) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(date);
}
