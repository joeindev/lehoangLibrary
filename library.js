function updateClock() {
    const now = new Date();

    const options = { timeZone: "Asia/Ho_Chi_Minh" };
    const localTime = new Date(now.toLocaleString('en-US', options));

    const hours = localTime.getHours();
    const minutes = localTime.getMinutes();
    const seconds = localTime.getSeconds();

    const hourDegree = (hours % 12) * 30 + (minutes / 60) * 30; 
    const minuteDegree = minutes * 6;  
    const secondDegree = seconds * 6; 

    document.querySelector('.hour').style.transform = `translateX(-50%) translateY(-50%) rotate(${hourDegree}deg)`;
    document.querySelector('.minute').style.transform = `translateX(-50%) translateY(-50%) rotate(${minuteDegree}deg)`;
    document.querySelector('.second').style.transform = `translateX(-50%) translateY(-50%) rotate(${secondDegree}deg)`;
}

setInterval(updateClock, 1000);

updateClock();

function showSection(section) {
    const sections = document.querySelectorAll('.owner-card, .discussion, .contact');
    sections.forEach(sec => sec.style.display = 'none');

    document.getElementById(section).style.display = 'block';

    updateBreadcrumb(section);
}

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

function postDiscussion() {
    const text = document.getElementById('discussionText').value.trim();
    if (text === '') {
        alert('Hãy nhập bình luận trước khi đăng!');
        return;
    }

    const list = document.getElementById('discussionList');
    const listItem = document.createElement('li');
    
    const userName = "Người dùng";  
    const userAvatar = "avatar.jpg"; 

    listItem.innerHTML = `
        <div class="comment">
            <img src="${userAvatar}" alt="${userName}" class="avatar">
            <strong>${userName}</strong>
            <p>${text}</p>
        </div>
        <div class="comment-actions">
            <button onclick="likeComment(this)">Thích</button>
            <button onclick="replyToComment(this)">Trả lời</button>
        </div>
    `;
    
    list.appendChild(listItem);
    document.getElementById('discussionText').value = '';
}

function likeComment(button) {
    const likeCount = button.textContent === 'Thích' ? 1 : -1;
    button.textContent = button.textContent === 'Thích' ? 'Bỏ thích' : 'Thích';
    alert(`Bạn đã ${likeCount === 1 ? 'thích' : 'bỏ thích'} bình luận!`);
}

function replyToComment(button) {
    const comment = button.closest('.comment');
    const replyText = prompt("Nhập câu trả lời của bạn:");
    if (replyText) {
        const reply = document.createElement('div');
        reply.classList.add('reply');
        reply.innerHTML = `<strong>Trả lời:</strong> ${replyText}`;
        comment.appendChild(reply);
    }
}

function telegramAlert() {
    alert('Rất tiếc tôi không dùng mạng xã hội dành cho sỉu nhi :)))');
}

window.onload = function() {
    updateClock();
}
