export const updateObj = (oldObject, updatedValue) => {
    return {
        ...oldObject,
        ...updatedValue
    }
}