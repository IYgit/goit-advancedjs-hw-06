let some: unknown;
some = 'Text';
let str: string;

// Варіант 1: Використання приведення типу
str = some as string;

// Варіант 2: Використання перевірки типу
if (typeof some === 'string') {
    str = some;
}


export {};