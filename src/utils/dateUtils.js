export const formatDateToBackend = (date) => {
    if (!date) return null; // Retorna null se a data for inválida ou vazia
    if (typeof date === 'string') {
        const [year, month, day] = date.split('-'); // Supondo que o formato seja ISO (YYYY-MM-DD)
        return `${year}-${month.padStart(2, '0')}-${day}`; // Ajuste para o formato esperado pelo backend
    }
    if (date instanceof Date) {
        // Se for um objeto Date, formata para dd-MM-yyyy
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
    return null; // Retorna null se o formato não for reconhecido
};