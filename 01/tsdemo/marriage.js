var Sex;
(function (Sex) {
    Sex[Sex["male"] = 0] = "male";
    Sex[Sex["female"] = 1] = "female";
})(Sex || (Sex = {}));
function marry(a, b) {
    if (a.sex === b.sex) {
        throw new Error('同行婚姻暂不合法');
    }
    else {
        return [a, b];
    }
}
var Jack = {
    sex: Sex.male,
    length: 18
};
var Maria = {
    sex: Sex.female,
    depth: Infinity
};
var Hank = {
    sex: Sex.male,
    depth: -18
};
console.log(marry(Jack, Maria));
console.log(marry(Jack, Hank));
