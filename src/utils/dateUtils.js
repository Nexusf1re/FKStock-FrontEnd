export const formatDateToBackend = (date) => {
    if (!date) return null; // Retorna null se a data for inválida ou vazia
    if (typeof date === 'string') {
        const [year, month, day] = date.split('-'); // Supondo que o formato seja ISO (YYYY-MM-DD)
        return `${day}-${month}-${year}`; // Ajuste para o formato esperado pelo backend
    }
    if (date instanceof Date) {
        // Se for um objeto Date, formata para dd-MM-yyyy
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    return null; // Retorna null se o formato não for reconhecido
};

export const formatDateToFrontend = (date) => {
  if (!date) return '';
  if (typeof date === 'string') {
      const [year, month, day] = date.split('T')[0].split('-'); // Supondo que o formato seja ISO
      return `${day}-${month}-${year}`;
  }
  if (date instanceof Date) {
      // Se for um objeto Date, formata para dd-MM-yyyy
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
  }
  return date; // Retorna o valor original se não for uma string ou Date
};