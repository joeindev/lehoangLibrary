window.onload = function () {
    const user = localStorage.getItem('user');
    if (user) {
        alert(`Chào mừng, ${user}, đến với thư viện của Hoàng!`);
    } else {
        window.location.href = 'index.html';
    }
};
