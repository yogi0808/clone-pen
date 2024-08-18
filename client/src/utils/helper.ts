// Debounce Function 

export function debounce<T extends (...args: any[]) => void>(cb: T, delay = 1500): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    };
}
