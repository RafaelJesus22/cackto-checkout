export function validateCPF(cpf: string): boolean {
  if (!cpf) return false;

  // Remove any non-digit characters
  const cleanCPF = cpf.replace(/\D/g, "");

  // Check if CPF has 11 digits
  if (cleanCPF.length !== 11) {
    return false;
  }

  // Check if all digits are the same (invalid CPF)
  if (/^(\d)\1{10}$/.test(cleanCPF)) {
    return false;
  }

  // Calculate first verification digit
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF[i]) * (10 - i);
  }
  let firstDigit = 11 - (sum % 11);
  if (firstDigit >= 10) {
    firstDigit = 0;
  }

  // Check first verification digit
  if (parseInt(cleanCPF[9]) !== firstDigit) {
    return false;
  }

  // Calculate second verification digit
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF[i]) * (11 - i);
  }
  let secondDigit = 11 - (sum % 11);
  if (secondDigit >= 10) {
    secondDigit = 0;
  }

  // Check second verification digit
  return parseInt(cleanCPF[10]) === secondDigit;
}
