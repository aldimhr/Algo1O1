/**
 * INSERTION SORT
 *
 * Insertion sort adalah fungsi untuk mengurutkan nilai dengan
 * - Ambil angka pertama dan kedua
 * - bandingkan nilainya
 * -- jika angka 1 > angka 2, maka swap
 * -- jika angka 1 < angka 2, maka cek angka selanjutnya
 *
 * Contoh
 * 5,4,3,2
 * -- cek angka 5 dan 4
 * -- karena 5 > 4, maka swap
 * 1) 4,5,3,2
 * -- cek angka selanjutnya, 5 dan 3
 * -- karena 5 > 3, maka swap
 * 2) 4,3,5,2
 * -- lanjut keangka belakang, yaitu bandingkan 4 dan 3
 * -- karena 4 > 3, maka swap
 * 3) 3,4,5,2
 * -- cek angka selanjutnya, 5 dan 2
 * -- karena 5 > 2, maka swap
 * 4) 3,4,2,5
 * -- lanjut keangka belakangnya, yaitu bandingkan 4 dan 2
 * -- karena 4 > 2, maka swap
 * 5) 3,2,4,5
 * -- lanjut keangka belakangnya, yaitu bandingkan 3 dan 2
 * -- karena 3 > 2, maka swap
 * 6) 2,3,4,5
 * -- selesai
 *
 */

// order -> true DESC, false ASC

/**
 *
 * @param {[]} array
 * @param {boolean} order
 * @returns
 */
function insertion(array, order = false) {
  let n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i; j >= 0; j--) {
      let a = array[j];
      let b = array[j + 1];

      // Descending a < b
      // Ascending a > b
      if (order ? a < b : a > b) {
        array = swap(array, j, j + 1);
      }
    }
  }

  return array;
}

// let test = insertion(['a', 'z', 'b', 'd', 'e']);
let test = insertion(['ab', 'ac', 'ae', 'ag', 'az']);
console.log(test);

/**
 * Helper sorting function
 */

// swap value arr[a] to arr[b]
function swap(arr, a, b) {
  let result = arr;
  [result[a], result[b]] = [result[b], result[a]];
  return result;
}

module.exports = insertion;
