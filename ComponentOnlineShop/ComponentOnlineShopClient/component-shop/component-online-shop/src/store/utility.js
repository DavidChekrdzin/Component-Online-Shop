export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,//the original object that you want to update { a: 1, b: 2 }
        ...updatedProperties// object that contains the new properties that you want to add or update in the original object { b: 3, c: 4 }
    };//result would be { a: 1, b: 3, c: 4 }
};
//This function is useful when you need to update an object with new properties, but you don't want to mutate the original object.
// Instead, you create a new object that is a combination of the original object and the updated properties.






