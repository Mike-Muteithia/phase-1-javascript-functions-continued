// code your solution here

/* function razzle() {
    console.log("You've been razzled!");
}
razzle(); */

/* razzle();
function razzle() {
    console.log("You've been razzled!");
} */


/* function razzle(lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
}
razzle();
razzle("Methuselah", "T'challah");
 */


/* 1 + 1;
"Razzle" + "dazzle!"; */


/* console.log(function() {
    console.log("Yet more razzling");
}); */


/* const button = document.getElementById("button");
button.addEventListener("click", function () {
    console.log("Yet more razzling");
});
 */


/* const fn = function () {
    console.log("Yet more razzling");
};

console.log(fn);
console.log(fn()); */


/* (function (baseNumber) {
    return baseNumber + 3;
})(2); */


/* function outer(greeting, msg = "It's a fine day to learn") {
    // 2
    const innerFunction = function (name , lang = "Python") {
        // 3
        return `${greeting}, ${name}! ${msg} ${lang}`; // 4
    };
    return innerFunction("student", "JavaScript"); // 5
}
outer("Hello"); // 1 */


/* function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name , lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction; 
}
outer("Hello")("student", "JavaScript"); */


/* function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name , lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction; 
}
const storedFunction = outer("Hello");
storedFunction("student", "JavaScript"); */


/* function outer(greeting, msg = "It's a fine day to learn") {
    return function (name , lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
}
outer("Hello")("student", "JavaScript"); */


/* const array = (function (thingToAdd) {
    const base = 3;
    return [
        function () {
            return base + thingToAdd;
        },
        function () {
            return base;
        },
    ];
})(2);

array[0];
array[1];
array[0]();
array[1](); */


/* function demoChain(name) {
    const part1 = "hi";
    return function () {
        const part2 = "there";
        return function () {
            console.log(`${part1.toUpperCase()} ${part2} ${name}`);
        };
    };
}
demoChain("Dr. Stephen Strange")()(); */


function saturdayFun(activity = "roller-skate") {
        return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
        return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*") {
    return function (adjective = "special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    };
}
wrapAdjective("%")("a dedicated programmer")
