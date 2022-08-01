export const increment = (number) => {
    return {
        type: "INCREMENT",
        payload: number,
    };
};
export const decrement = (number) => {
    return {
        type: "DECREMENT",
        payload: number,
    };
};
export const reset = (number) => {
    return {
        type: "RESET",
        payload: number,
    };
};
