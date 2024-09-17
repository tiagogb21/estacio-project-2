// 1 - Função swap
const swap = (arr, i, j) => {
    if (arr[i] === undefined || arr[j] === undefined) return arr;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
};

// 2 - Função getRandomNumber
function getRandomNumber(size) {
    return Math.floor(Math.random() * size);
}

// 3 - Função Shuffle
const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const idx1 = getRandomNumber(arr.length);
        const idx2 = getRandomNumber(arr.length);
        swap(arr, idx1, idx2);
    }
    return arr;
};

console.log(shuffle([1, 2, 3], 5));

// 4 - Função Bubble Sort
const bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};

console.log(bubble_sort([1, 2, 1, 2, 1, 2, 3]));

// 5 - Função Selection Sort
const selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr, i, minIdx);
    }
    return arr;
};

console.log(selection_sort([1, 2, 1, 2, 1, 2, 3]));

// 7 - Função de Particionamento
const particionamento = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};

// 6 - Função Quick Sort
const quick_sort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        let pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
    return arr;
};

console.log(quick_sort([1, 2, 1, 2, 1, 2, 3]));
