/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let zigzag = new Array(numRows).fill("");
    let rowNum = 0;
    for (let i = 0; i < s.length; i++) {
        if (rowNum === numRows) {
            rowNum -= 2;
            while (rowNum > 0 && i < s.length) {
                zigzag[rowNum] += s[i];
                rowNum--;
                i++;
            }
            if (i === s.length) break;
        }
        zigzag[rowNum] += s[i];
        rowNum++;
    }
    let convertedStr = "";
    for (let i = 0; i < zigzag.length; i++) {
        convertedStr += zigzag[i];
    }
    return convertedStr;
};