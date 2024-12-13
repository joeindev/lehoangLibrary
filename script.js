const validUsers = [
    { name: "lê huy hoàng", class: "9a" },
    { name: "phan lê thanh tùng", class: "9b" },
    { name: "nguyễn quang huy", class: "9a" }
];

function authenticate() {
    const name = document.getElementById('nameInput').value.toLowerCase().trim();
    const className = document.getElementById('classInput').value.toLowerCase().trim();
    const error = document.getElementById('error');

    const isValid = validUsers.some(user => user.name === name && user.class === className);

    if (isValid) {
        document.getElementById('authPage').classList.add('hidden');
        document.getElementById('libraryPage').classList.remove('hidden');
    } else {
        error.style.display = 'block';
    }
}
