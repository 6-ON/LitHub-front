const rtf = new Intl.RelativeTimeFormat('en', { style: 'narrow' });
const CONV = 3600 * 24 * 1000
const getElapsedTime = (date_str) => {
    const date = new Date(date_str)
    return rtf.format(Math.round(((date - new Date()) / (CONV))),'day') 
}

export { getElapsedTime };