function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email) || password.length < 8 || !firstName || !lastName) {
      document.getElementById('errorMessage').textContent = 'Formulário incompleto ou incorreto.';
      document.getElementById('successMessage').textContent = '';
    } else {
      document.getElementById('errorMessage').textContent = '';
  
      // Simulate a server request for registration
      setTimeout(() => {
        document.getElementById('successMessage').textContent = 'Cadastro realizado com sucesso!';
    }, 500);
    
    }
  
    return false; // Prevents the form from submitting
  }
