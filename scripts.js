const validUsers = [
    "Phạm Bùi Ngọc Hân", "Hà Thị Hiền Trang", "Hoàng Ngọc Đức Mạnh",
    "Nguyễn Thiện Vỹ", "Tạ Tùng Lâm", "Lê Thị Yến Vy", "Nguyễn Hoàng Nam",
    "Đặng Huy Hoàng", "Nguyễn Huy Hoàng", "Trịnh Phương Anh", "Phạm Kỳ Anh",
    "Đỗ Danh Chiến", "Đỗ Hồng Quân", "Doãn Lê Anh Tuấn", "Lê Thị Thùy Dương", "Nguyễn Quốc Việt"
];

function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const className = document.getElementById('className').value.trim();

    if (!username || !className) {
        document.getElementById('error-message').textContent = "Vui lòng điền đầy đủ thông tin!";
        return;
    }

    if (validUsers.includes(username) && className === "9A") {
        window.location.href = "library.html";
    } else {
        document.getElementById('error-message').textContent = "Tên người dùng hoặc lớp không hợp lệ!";
    }
}

document.getElementById('login-button').addEventListener('click', validateLogin);

function createSnowflakes() {
    const snowContainer = document.getElementById('snow');
    for (let i = 0; i < 100; i++) {
        const flake = document.createElement('div');
        flake.classList.add('flake');
        flake.style.width = `${Math.random() * 5 + 5}px`;
        flake.style.height = flake.style.width;
        flake.style.left = `${Math.random() * 100}%`;
        flake.style.animationDuration = `${Math.random() * 3 + 7}s`;
        snowContainer.appendChild(flake);
    }
}

createSnowflakes();
