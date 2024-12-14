// Cập nhật đồng hồ theo múi giờ Hà Nội (GMT+7)
function updateClock() {
    const now = new Date();

    // Lấy giờ theo múi giờ GMT+7 (Hà Nội)
    const options = { timeZone: "Asia/Ho_Chi_Minh" };
    const localTime = new Date(now.toLocaleString('en-US', options));

    const hours = localTime.getHours();
    const minutes = localTime.getMinutes();
    const seconds = localTime.getSeconds();

    // Tính toán góc cho từng kim
    const hourDegree = (hours % 12) * 30 + (minutes / 60) * 30;  // Mỗi giờ = 30 độ
    const minuteDegree = minutes * 6;  // Mỗi phút = 6 độ
    const secondDegree = seconds * 6;  // Mỗi giây = 6 độ

    // Cập nhật vị trí kim đồng hồ
    document.querySelector('.hour').style.transform = `translateX(-50%) translateY(-50%) rotate(${hourDegree}deg)`;
    document.querySelector('.minute').style.transform = `translateX(-50%) translateY(-50%) rotate(${minuteDegree}deg)`;
    document.querySelector('.second').style.transform = `translateX(-50%) translateY(-50%) rotate(${secondDegree}deg)`;
}

// Chạy đồng hồ khi trang web tải
setInterval(updateClock, 1000);

// Cập nhật đồng hồ khi trang web tải
updateClock();

// Hiển thị phần thông tin chủ sở hữu, thảo luận, hoặc liên hệ
function showSection(section) {
    const sections = document.querySelectorAll('.owner-card, .discussion, .contact');
    sections.forEach(sec => sec.style.display = 'none');

    document.getElementById(section).style.display = 'block';

    // Cập nhật breadcrumb sau khi chuyển đổi giữa các phần
    updateBreadcrumb(section);
}

// Cập nhật breadcrumb
function updateBreadcrumb(section) {
    const breadcrumb = document.querySelector('.breadcrumb');
    let breadcrumbContent = `<a href="#">Trang Chủ</a> > `;

    switch (section) {
        case 'owner':
            breadcrumbContent += '<a href="#">Chủ Sở Hữu</a>';
            break;
        case 'discussion':
            breadcrumbContent += '<a href="#">Thảo Luận</a>';
            break;
        case 'contact':
            breadcrumbContent += '<a href="#">Liên Hệ</a>';
            break;
    }

    breadcrumb.innerHTML = breadcrumbContent;
}

// Đăng bình luận trong diễn đàn
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

// Alert khi người dùng click vào Telegram
function telegramAlert() {
    alert('Rất tiếc tôi không dùng mạng xã hội dành cho sỉu nhi :)))');
}

// Cập nhật đồng hồ khi trang web tải
window.onload = function() {
    updateClock();
}
