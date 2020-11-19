// משפטי תנאי
if (true) {
    console.log('זה נכון');
} else {
    console.log('זה לא נכון');
}

function areYouAMan(userAge) {
    if (userAge > 13) {
        return 'You are a man!';
    } else if (userAge < 13) {
        return 'You are a child';
    } else {
        return 'Congartulations on your bar mizva';
    }
}

// לולאות

while (true) {
    // Do something
}

let i = 0

while (i < 10) {
    console.log('אלון ואריאל יודעים לתכנת');
    i = i + 1;
}

for (let i = 0; i < 10; i = i + 1) {
    console.log('אלון ואריאל יודעים לתכנת');
}

do {
    console.log('אלון ואריאל יודעים לתכנת');
    i = i + 1;
} while (i < 10);

// חישוב גובה ממוצע 
function calculateAverageHeight(numberOfStudents) {
    let sumOfHeights = 0;
    for (let i = 0; i < numberOfStudents; i = i + 1) {
        let height = prompt('What is your height?');
        sumOfHeights = sumOfHeights + height;
    }
    return sumOfHeights / numberOfStudents;
}

// מעבר על מערך
let array = [1, 2, 3, 4, 5];
let newArray = [];
for (item of array) {
    newArray.push(item * item);
}

