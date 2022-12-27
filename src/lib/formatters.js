export const currencyFormatter = new Intl.NumberFormat('en', {
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: 'inr'
});

export const percentageFormatter = new Intl.NumberFormat('en', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});