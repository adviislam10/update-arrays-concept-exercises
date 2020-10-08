//Q1
function adjustGrades(anArray) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == 48 || anArray[i] == 49) {
            anArray[i] = 50;
        } else if (anArray[i] == 78 || anArray[i] == 79) {
            anArray[i] = 80;
        }
    }
}

//Q2
function replaceAll(anArray, oldVal, newVal) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == oldVal); {
            anArray[i] = newVal
        }
    }
}

//Q3
function swap(anArray, index1, index2) {
    let swap = anArray[index1];
    anArray[index1] = anArray[index2];
    anArray[index2] = swap;
}