const chrono = require('./dist');

//const counter = new chrono.Counter(2);

// let res = counter.start()
//     .subscribe(
//         data => {
//             console.log(data);
//             if (data === 'FINISH') {
//                 res.unsubscribe();
//             }
//         }
//     );

const discounter = new chrono.Discounter(2);

let res = discounter.start()
    .subscribe(
        data => {
            console.log(data);
            if (data === 'FINISH') {
                res.unsubscribe();
            }
        }
    );