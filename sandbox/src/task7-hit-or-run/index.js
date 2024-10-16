
/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    const rand = Math.floor(Math.random() * (b - a) + a);
    for (let i = 2; i < rand; i++) {
        if (rand % i === 0) {
            return 'hit'
        }
    }
    return 'run'
};
