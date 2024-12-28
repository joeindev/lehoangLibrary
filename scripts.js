const validUsers = [
    "Phạm Bùi Ngọc Hân", "Hà Thị Hiền Trang", "Hoàng Ngọc Đức Mạnh",
    "Nguyễn Thiện Vỹ", "Tạ Tùng Lâm", "Lê Thị Yến Vy", "Nguyễn Hoàng Nam",
    "Đặng Huy Hoàng", "Nguyễn Huy Hoàng", "Trịnh Phương Anh", "Phạm Kỳ Anh",
    "Đỗ Danh Chiến", "Đỗ Hồng Quân", "Doãn Lê Anh Tuấn", "Lê Thị Thùy Dương", "Nguyễn Quốc Việt", "Lê Huy Hoàng", "Hồ Nguyễn Như Ngọc",
];

function validateLogin() {
    const usernameInput = document.getElementById('username');
    const classNameInput = document.getElementById('className');
    const errorMessage = document.getElementById('error-message');

    if (!usernameInput || !classNameInput || !errorMessage) return;

    const username = usernameInput.value.trim();
    const className = classNameInput.value.trim();

    if (!username || !className) {
        errorMessage.textContent = "Vui lòng điền đầy đủ thông tin!";
        errorMessage.classList.add('show');
        return;
    }

    if (validUsers.includes(username) && className === "11A1") {
        window.location.href = "library.html";
    } else {
        errorMessage.textContent = "Tên người dùng hoặc lớp không hợp lệ!";
        errorMessage.classList.add('show');
    }
}

function createSnowflakes() {
    const snowContainer = document.getElementById('snow');
    if (!snowContainer) return;

    const flakeCount = 50;
    for (let i = 0; i < flakeCount; i++) {
        const flake = document.createElement('div');
        flake.classList.add('flake');
        flake.style.width = `${Math.random() * 5 + 5}px`;
        flake.style.height = flake.style.width;
        flake.style.left = `${Math.random() * 100}%`;
        flake.style.animationDuration = `${Math.random() * 3 + 7}s`;
        snowContainer.appendChild(flake);
    }
}

document.getElementById('login-button')?.addEventListener('click', validateLogin);
createSnowflakes();
