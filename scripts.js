// Mảng chứa các tên người dùng hợp lệ
const validUsers = [
    "Phạm Bùi Ngọc Hân", "Hà Thị Hiền Trang", "Hoàng Ngọc Đức Mạnh",
    "Nguyễn Thiện Vỹ", "Tạ Tùng Lâm", "Lê Thị Yến Vy", "Nguyễn Hoàng Nam",
    "Đặng Huy Hoàng", "Nguyễn Huy Hoàng", "Trịnh Phương Anh", "Phạm Kỳ Anh",
    "Đỗ Danh Chiến", "Đỗ Hồng Quân", "Doãn Lê Anh Tuấn", "Lê Thị Thùy Dương", "Nguyễn Quốc Việt"
];

// Hàm kiểm tra thông tin đăng nhập
function validateLogin() {
    // Lấy giá trị từ các trường nhập liệu
    const username = document.getElementById('username').value.trim();
    const className = document.getElementById('className').value.trim();

    // Kiểm tra nếu tên người dùng và lớp không trống
    if (!username || !className) {
        document.getElementById('error-message').textContent = "Vui lòng điền đầy đủ thông tin!";
        return;
    }

    // Kiểm tra xem người dùng có hợp lệ không
    if (validUsers.includes(username) && className === "9A") {
        // Nếu hợp lệ, chuyển hướng đến trang library.html
        window.location.href = "library.html";
    } else {
        // Nếu không hợp lệ, hiển thị thông báo lỗi
        document.getElementById('error-message').textContent = "Tên người dùng hoặc lớp không hợp lệ!";
    }
}

// Xử lý sự kiện khi người dùng nhấn nút đăng nhập
document.getElementById('login-button').addEventListener('click', validateLogin);
