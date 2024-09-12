document.addEventListener('DOMContentLoaded', () => {
    const registroBtn = document.querySelector('.registro-btn');
    const loginBtn = document.querySelector('.login-btn');
    const logoutBtn = document.querySelector('.logout-btn');

    if (registroBtn) {
        registroBtn.addEventListener('click', () => {
            window.location.href = 'registro.html';
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'logueo.html';
        });
    }
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {

            localStorage.removeItem('users'); 
         
            window.location.href = 'index.html';
        });
    }
});
