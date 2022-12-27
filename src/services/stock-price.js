const API_KEY = '388JDE7XTTQSPIYX';

const ENDPOINT = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY';

export const getStock = async (symbol) => {
    const response = await fetch(`${ENDPOINT}&symbol=${symbol.toUpperCase()}&interval=1min&apikey=${API_KEY}`);
    const json = await response.json();

    console.log(json);
};