export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    } else if (data.gender === 'male') {
        if (!('income' in data)) {
            data.income = 100000;
        }
    }
    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const keys = new Set([
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3),
    ]);
    return Array.from(keys).sort();
}

export function objectClone(obj, count) {
    const result = [];
    for (let i = 0; i < count; i++) {
        const clone = deepClone(obj);
        clone.id = i;
        result.push(clone);
    }
    return result;
}

function deepClone(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map(deepClone);
    }
    const copy = {};
    for (const key of Object.keys(value)) {
        copy[key] = deepClone(value[key]);
    }
    return copy;
}
