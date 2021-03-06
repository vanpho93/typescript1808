// function getTotalLength(a: number[], b: number[]): number {
//     return a.length + b.length;
// }

// function getTotalStringLength(a: string, b: string): number {
//     return a.length + b.length;
// }

interface HaveLength {
    length: number
}

function getTotalLength2(a: HaveLength, b: HaveLength): number {
    return a.length + b.length;
}

const arr1 = [1, 3, 4];
const arr2 = [3, 4, 5, 6 ,7];

console.log(getTotalLength2(arr1, arr2));
console.log(getTotalLength2('abc', 'def'));
