
/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    const elements = document.querySelectorAll(`.${className}, .${className}_active`);
    if (elements.length === 0) {
        return;
    }
    for (const element of elements) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
            element.classList.add(className + '_active');
        } else {
            element.classList.remove(className + '_active');
            element.classList.add(className);
        }
    }
}