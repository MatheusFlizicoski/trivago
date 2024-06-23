// Função para validar e exibir informações no modal
$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();

        // Coletando os valores dos campos
        var name = $('#name').val().trim();
        var surname = $('#surname').val().trim();
        var phone = $('#phone').val().trim();
        var cpf = $('#cpf').val().trim();
        var cep = $('#cep').val().trim();
        var email = $('#email').val().trim();
        var password = $('#password').val().trim();
        var checkbox = $('#check').is(':checked');

        // Validando os campos
        var valid = true;

        if (!validarTelefone(phone)) {
            valid = false;
            $('#phone').addClass('is-invalid');
        } else {
            $('#phone').removeClass('is-invalid');
        }

        if (!validarCPF(cpf)) {
            valid = false;
            $('#cpf').addClass('is-invalid');
        } else {
            $('#cpf').removeClass('is-invalid');
        }

        if (!validarCEP(cep)) {
            valid = false;
            $('#cep').addClass('is-invalid');
        } else {
            $('#cep').removeClass('is-invalid');
        }

        if (!validarEmail(email)) {
            valid = false;
            $('#email').addClass('is-invalid');
        } else {
            $('#email').removeClass('is-invalid');
        }

        // Se todos os campos forem válidos, exibir no modal
        if (valid) {
            var userInfo = `
                <p><strong>Nome:</strong> ${name} ${surname}</p>
                <p><strong>Telefone:</strong> ${phone}</p>
                <p><strong>CPF:</strong> ${cpf}</p>
                <p><strong>CEP:</strong> ${cep}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Senha:</strong> ${password}</p>
                <p><strong>Concordou com os termos:</strong> ${checkbox ? 'Sim' : 'Não'}</p>
            `;

            $('#userInfo').html(userInfo);
            $('#userInfoModal').modal('show');
        }
    });
});

$(document).ready(function() {
    // Máscara para o telefone
    $('#phone').mask('(00) 00000-0000');

    // Máscara para o CPF
    $('#cpf').mask('000.000.000-00', { reverse: true });

    // Máscara para o CEP
    $('#cep').mask('00000-000');

    // Restante do código para validação e exibição no modal
    $('form').submit(function(event) {
        event.preventDefault();
        
    });
});