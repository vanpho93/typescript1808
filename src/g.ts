// generic

function getTotal(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNumbers = typeof a === 'number' && typeof b === 'number';
            if (!isNumbers) return reject(new Error('Type error'));
            resolve(a + b);
        });
    });
}

let mang: Array<number>;
