# Chronometer
[![Build Status](https://travis-ci.com/mavarona/chronometer-mavl.svg?branch=master)](https://travis-ci.com/mavarona/chronometer-mavl)
[![npm version](https://badge.fury.io/js/chronometer-mavl.svg)](https://badge.fury.io/js/chronometer-mavl)
[![Coverage Status](https://coveralls.io/repos/github/mavarona/chronometer-mavl/badge.svg?branch=master)](https://coveralls.io/github/mavarona/chronometer-mavl?branch=master)
[![Documentation](https://raw.githubusercontent.com/mavarona/chronometer-mavl/master/documentation/images/coverage-badge-documentation.svg?sanitize=true)](https://github.com/mavarona/chronometer-mavl)

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