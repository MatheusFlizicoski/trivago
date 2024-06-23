
document.addEventListener('DOMContentLoaded', (event) => {
    // Carregar dados do localStorage
    loadFormData();

    // Salvar dados ao submeter o formulário
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        saveFormData();
        showModal();
    });
});

function saveFormData() {
    const formData = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        phone: document.getElementById('phone').value,
        cpf: document.getElementById('cpf').value,
        cep: document.getElementById('cep').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

function loadFormData() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
        document.getElementById('name').value = formData.name;
        document.getElementById('surname').value = formData.surname;
        document.getElementById('phone').value = formData.phone;
        document.getElementById('cpf').value = formData.cpf;
        document.getElementById('cep').value = formData.cep;
        document.getElementById('email').value = formData.email;
        document.getElementById('password').value = formData.password;
    }
}

// Função para Mostrar as informações no modal 
function showModal() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    const userInfo = `
        <p><strong>Nome:</strong> ${formData.name}</p>
        <p><strong>Sobrenome:</strong> ${formData.surname}</p>
        <p><strong>Telefone:</strong> ${formData.phone}</p>
        <p><strong>CPF:</strong> ${formData.cpf}</p>
        <p><strong>CEP:</strong> ${formData.cep}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
    `;

    document.getElementById('userInfo').innerHTML = userInfo;

    const userInfoModal = new bootstrap.Modal(document.getElementById('userInfoModal'));
    userInfoModal.show();
}
