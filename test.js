

const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' },
    { name: 'potatoes', category: 'veges' },

];
web componenets
function groupBy(array, keyFunction) {
    return array.reduce((acc, obj) => {
        const key = keyFunction(obj);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

const groupByKey = groupBy(products, (product) => product.name);
console.log(groupByKey);