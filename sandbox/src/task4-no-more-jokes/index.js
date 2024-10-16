/**
 * Валидирует операнды и возвращает их сумму
 * 
 * @param {unknown} leftOperand Левый операнд
 * @param {unknown} rightOperand Правый операнд
 * @returns {Number} Сумма операндов
 */
export const sum = (leftOperand, rightOperand) => {
    const l = typeof leftOperand === 'number';
    const r = typeof rightOperand === 'number';

    if (!l && !r) {
        throw new Error("Operands are not numbers");
    }
    if (!l) {
        throw new Error("The left operand is not number");
    }
    if (!r) {
        throw new Error("The right operand is not number");
    }
    return leftOperand + rightOperand;
};
