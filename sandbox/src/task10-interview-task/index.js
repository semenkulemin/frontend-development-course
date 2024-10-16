
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    while (num >= 10) {
        let res = 1;
        let digits = num.toString().split('');
        
        for (let i = 0; i < digits.length; i++) {
            res *= parseInt(digits[i]);
        }
        
        num = res;
    }
    return num;
};
