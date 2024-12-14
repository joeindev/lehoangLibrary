// Hiển thị các section
function showSection(section) {
    const sections = document.querySelectorAll('.owner-card, .discussion, .contact');
    sections.forEach(sec => sec.style.display = 'none');

    document.getElementById(section).style.display = 'block';
}

// Đăng bình luận
function postDiscussion() {
    const text = document.getElementById('discussionText').value.trim();
    if (text === '') {
        alert('Hãy nhập bình luận trước khi đăng!');
        return;
    }
    const list = document.getElementById('discussionList');
    const listItem = document.createElement('li');
    listItem.textContent = text;
    list.appendChild(listItem);
    document.getElementById('discussionText').value = '';
}

// Cảnh báo Telegram
function telegramAlert() {
    alert('Rất tiếc tôi không dùng mạng xã hội dành cho sỉu nhi :)))');
}
