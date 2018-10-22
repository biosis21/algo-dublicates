// Parse input arguments
const args = process.argv
    .slice(2)
    .map(arg => arg.split('='))
    .reduce((args, [value, key]) => {
        args[value] = key;
        return args;
    }, {});


const n = parseInt(args.n, 10) || 1000000;

printDuplicates(generateList(n));

/**
 * Generate random number
 * @param {number} n
 * @returns {Array}
 */
function generateList(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * (n - 1) + 1));
    }

    // Tricky case 'Therefore there must be at least one duplicate in the list.'.
    // Just add a first element to the end of array
    if (arr[0]) {
        arr.push(arr[0]);
    }

    return arr;
}

/**
 * Function that find and print duplicate numbers.
 * @param {Array} list
 */
function printDuplicates(list) {
    console.log('Generated list =', list);

    // Collection for the saving unique numbers
    const numbers = {};
    let output = '';

    list.forEach((el) => {
        if (numbers[el]) {
            output += '\'' + el + '\' ';
        } else {
            numbers[el] = true;
        }
    });

    console.log(output);
}