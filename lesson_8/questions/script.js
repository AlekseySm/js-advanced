const fs = require('fs');

let test = {
    a: 'test',
    b: 1,
    c: {
        a: 'test',
        b: 2
    },
    d: [1,2,3,4]
}

const content = JSON.stringify(test);

fs.writeFileSync("х.txt", content);

// ########################################

// console.group()
//     for (let i = 0; i < 1000; i++) {
//         if (i <= 100) {
//             console.log(i);
//             continue;
//         }
//         break;
//     }
// console.groupEnd();

