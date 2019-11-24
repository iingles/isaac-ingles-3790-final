export const capitalize = (str) => {
    //capitalize the first letter of a string
    if (typeof str == 'string') {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    }
}