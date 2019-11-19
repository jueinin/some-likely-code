import TreeModel from 'tree-model';
import flatDeep from 'lodash/flattenDeep';
/**
 * 为数字加上单位：万或亿
 *
 * 例如：
 *      1000.01 => 1000.01
 *      10000 => 1万
 *      99000 => 9.9万
 *      566000 => 56.6万
 *      5660000 => 566万
 *      44440000 => 4444万
 *      11111000 => 1111.1万
 *      444400000 => 4.44亿
 *      40000000,00000000,00000000 => 4000万亿亿
 *      4,00000000,00000000,00000000 => 4亿亿亿
 *
 * @param {number} number 输入数字.
 * @param {number} decimalDigit 小数点后最多位数，默认为2
 * @return {string} 加上单位后的数字
 */
function addChineseUnit(number: number, decimalDigit?: number) {
    var addWan = function (integer: number, number: number, mutiple: number, decimalDigit: number) {
        var digit = getDigit(integer);
        if (digit > 3) {
            var remainder = digit % 8;
            if (remainder >= 5) {   // ‘十万’、‘百万’、‘千万’显示为‘万’
                remainder = 4;
            }
            return Math.round(number / Math.pow(10, remainder + mutiple - decimalDigit)) / Math.pow(10, decimalDigit) + '万';
        } else {
            return Math.round(number / Math.pow(10, mutiple - decimalDigit)) / Math.pow(10, decimalDigit);
        }
    };

    var getDigit = function (integer: number) {
        var digit = -1;
        while (integer >= 1) {
            digit++;
            integer = integer / 10;
        }
        return digit;
    };

    let add = function (number: number, decimalDigit?: number) {
        decimalDigit = decimalDigit || 2;
        var integer = Math.floor(number);
        var digit = getDigit(integer);
        // ['个', '十', '百', '千', '万', '十万', '百万', '千万'];
        var unit = [];
        if (digit > 3) {
            var multiple = Math.floor(digit / 8);
            if (multiple >= 1) {
                var tmp = Math.round(integer / Math.pow(10, 8 * multiple));
                unit.push(addWan(tmp, number, 8 * multiple, decimalDigit));
                for (var i = 0; i < multiple; i++) {
                    unit.push('亿');
                }
                return unit.join('');
            } else {
                return addWan(integer, number, 0, decimalDigit);
            }
        } else {
            return number;
        }
    };
    return add(number, decimalDigit);
}

let treeModel = new TreeModel();
/**
 *
 * @param {T[]} data
 * @param {(node: T) => boolean} func
 * @returns {T[]}
 */
let treeFilter=<T>(data: T[],func: (node:T)=>boolean):T[]=>{  // 递归过滤tree,func的参数是每个子节点,返回值是过滤后拿到的子元素们
    let dd: Array<TreeModel.Node<T>>[] = data.map(item=>{
        let tree=treeModel.parse(item);
        return tree.all(node=>func(node.model))
    })
    let temp= flatDeep(dd) as  TreeModel.Node<T>[];
    return temp.filter(item=>{
        return !!item
    }).map(item=>{
        return item!.model
    })
}

let treeWalk=<T>(data:T[],callback:(node:T)=>any)=>{
    let dd=data.map(item=>{
        let tree = treeModel.parse(item);
        tree.walk(visitingNode => callback(visitingNode.model));
    })
}

/**@example axios({
  url: 'http://api.dev/file-download', //your url
  method: 'GET',
  responseType: 'blob', // important
  尚未经给测试可能不太稳定
}) */
let download = (response: any, fileName: string) => {
    const url = URL.createObjectURL(new Blob(response));
    const link = document.createElement("a");
    link.setAttribute("download", fileName);
    link.setAttribute('href', url);
    document.body.appendChild(link);
    link.click();
    link.remove();
};
function composer(...hocs:Function[]) {
    if (hocs.length === 1) {
        return hocs[0];
    }
    return hocs.reduce((accumulator, currentValue) => {
        return (...args: any) => accumulator(currentValue(...args))
    })
}
export {addChineseUnit, treeFilter, treeWalk,composer,};
