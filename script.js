// Função para trocar de tela
function nextStep(currentId, nextId) {
    document.getElementById(currentId).classList.remove('active');
    document.getElementById(nextId).classList.add('active');
}

// Lógica do Login
document.getElementById('form-login').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if(user === 'admin' && pass === '1234') {
        nextStep('step-login', 'step-