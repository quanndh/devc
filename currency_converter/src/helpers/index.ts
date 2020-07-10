export default {
    formatCurrency: (value: number, country: string) => {
        return value.toLocaleString('it-IT', { style: 'currency', currency: country });
    }
}