
// função para validação de senha
function isValidPassword(password) {
  // Pelo menos 8 caracteres, 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

// Função para gerar hash SHA-256 da senha
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// função para validação de email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// função para validação de URL
function isValidURL(url) {
  const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
  return regex.test(url);
}

// função para validação de número de telefone (formato nacional BR)
function isValidPhoneNumber(phoneNumber) {
  // Aceita (11) 91234-5678 ou (11) 1234-5678
  const regex = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/;
  return regex.test(phoneNumber);
}

// função para validação de código postal (CEP brasileiro)
function isValidPostalCode(postalCode) {
  const regex = /^\d{5}-?\d{3}$/;
  return regex.test(postalCode);
}  

// função para validação de data (formato DD-MM-YYYY)
function isValidDate(date) {
  const regex = /^\d{2}-\d{2}-\d{4}$/;
  if (!regex.test(date)) return false;

  const [day, month, year] = date.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);

  return (
    dateObj.getFullYear() === year &&
    dateObj.getMonth() === month - 1 &&
    dateObj.getDate() === day
  );
}
