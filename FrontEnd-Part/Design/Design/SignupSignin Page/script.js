function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.add('visible');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('visible');
    }
}
