# Chronometer
Stopwatch to count in ascending and descending mode

## Installation

```
npm install chronometer-mavl
```

## How to use

### Counter
```
const chrono = require('chronometer-mavl');

const counter = new chrono.Counter(3);

let res = counter.start()
    .subscribe(
        data => {
            console.log(data);
            if (data === 'FINISH') {
                res.unsubscribe();
            }
        }
    );

// The expected result
00:00:00
00:00:01
00:00:02
FINISH
```

### Discounter
```
const chrono = require('chronometer-mavl');

const discounter = new chrono.Discounter(4);

let res = discounter.start()
    .subscribe(
        data => {
            console.log(data);
            if (data === 'FINISH') {
                res.unsubscribe();
            }
        }
    );

// The expected result
00:00:04
00:00:03
00:00:02
00:00:01
FINISH
```