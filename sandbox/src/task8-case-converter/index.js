
/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    const words = snakeCaseString.split('_');
    let camelCaseStr = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        camelCaseStr += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return camelCaseStr
    
};
