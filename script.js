document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngừng reload trang khi submit form

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let statusDiv = document.getElementById("loginStatus");

    // Kiểm tra đăng nhập
    if (username === "phan lê thanh tùng" && password === "password") {
        showSuccess();
    } else if (username === "hoàng ngọc đức mạnh" && password === "password") {
        showFailure("CHÚNG TÔI KHÔNG CHỨA CHẤP THẰNG GAY Ở ĐÂY!!!");
    } else if (username === "lê phương anh" && password === "password") {
        showCucMuiMessage();
    } else if (username === "phan bùi ngọc hân" || username === "hoàng ngọc đức mạnh") {
        showSuccess();
    } else {
        showFailure("Đăng nhập thất bại, thử lại!");
    }
});

function showSuccess() {
    let statusDiv = document.getElementById("loginStatus");
    statusDiv.innerHTML = "<span class='success'>Đăng nhập thành công!</span>";
    let welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.style.display = "block";

    setTimeout(function() {
        welcomeMessage.style.display = "none";
    }, 3000); // 3s sau sẽ ẩn thông báo
}

function showFailure(message) {
    let statusDiv = document.getElementById("loginStatus");
    statusDiv.innerHTML = "<span class='failure'>" + message + "</span>";
    if (message === "CHÚNG TÔI KHÔNG CHỨA CHẤP THẰNG GAY Ở ĐÂY!!!") {
        setTimeout(function() {
            window.location.href = "about:blank"; // Đưa người dùng ra ngoài trang
        }, 3000);
    }
}

function showCucMuiMessage() {
    let statusDiv = document.getElementById("loginStatus");
    statusDiv.innerHTML = "<span class='failure'>CỨT MŨI</span>";

    let titles = [
        "CỨT MŨI", "CỨT MŨI", "CỨT MŨI", "CỨT MŨI", "CỨT MŨI", "CỨT MŨI", "CỨT MŨI"
    ];

    titles.forEach(function(title, index) {
        setTimeout(function() {
            let titleText = document.createElement('div');
            titleText.innerText = title;
            titleText.style.position = "absolute";
            titleText.style.top = Math.random() * 100 + "%";
            titleText.style.left = Math.random() * 100 + "%";
            titleText.style.fontSize = "20px";
            titleText.style.color = "red";
            document.body.appendChild(titleText);
            setTimeout(function() {
                titleText.remove();
            }, 1000);
        }, index * 500);
    });
}