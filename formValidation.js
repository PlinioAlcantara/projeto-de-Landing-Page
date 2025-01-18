document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const submitBtn = document.getElementById("submitBtn");
    const emailError = document.getElementById("emailError");
    const senhaError = document.getElementById("senhaError");
    const feedbackMessage = document.getElementById("feedbackMessage");

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const displayError = (element, message) => {
        element.textContent = message;
        element.style.color = "red";
    };

    const clearError = (element) => {
        element.textContent = "";
    };

    const simulateSubmit = () => {
        feedbackMessage.textContent = "Enviado com sucesso!";
        feedbackMessage.style.color = "green";
    };

    submitBtn.addEventListener("click", () => {
        let isValid = true;

// Validar e-mail
        if (!emailInput.value) {
            displayError(emailError, "O e-mail é obrigatório.");
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            displayError(emailError, "Por favor, insira um e-mail válido.");
            isValid = false;
        } else {
            clearError(emailError);
        }

// Validar senha
        if (!senhaInput.value) {
            displayError(senhaError, "A senha é obrigatória.");
            isValid = false;
        } else if (!validatePassword(senhaInput.value)) {
            displayError(senhaError, "A senha deve ter pelo menos 6 caracteres.");
            isValid = false;
        } else {
            clearError(senhaError);
        }

// Simular envio
        if (isValid) {
            simulateSubmit();
        } else {
            feedbackMessage.textContent = "Por favor, corrija os erros acima.";
            feedbackMessage.style.color = "red";
        }
    });
});
