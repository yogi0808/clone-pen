// Debounce Function
export function debounce(cb, delay = 1500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { cb(...args) }, delay);
    };
}