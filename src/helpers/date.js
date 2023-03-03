const rtf = new Intl.RelativeTimeFormat('en', { style: 'narrow' });
const CONV = 3600 * 24 * 1000
const getElapsedTime = (date_str) => {
    const date = new Date(date_str)
    const diff = Math.round(((date - new Date()) / (CONV)))
    if (diff == 0) 
        return 'today';
    return rtf.format(diff,'day') 
}

export { getElapsedTime };