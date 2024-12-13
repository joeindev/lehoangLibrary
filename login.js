document.getElementById('verifyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var className = document.getElementById('class').value;
    var dob = document.getElementById('dob').value;

    if (dob.match(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/)) {
        document.getElementById('notification').textContent = 'Đăng nhập thành công, chào mừng ' + name + ' lớp ' + className;
        window.location.href = 'library.html';
    } else {
        document.getElementById('notification').textContent = 'Ngày tháng năm sinh bất thường!';
    }
});