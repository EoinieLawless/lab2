function Char_count(value) {
    return value.length;
}
var count = Char_count("test 1");
console.log(count);
function char_count_nospace(value) {
    return value.replace(" ", "").length;
}
var count2 = char_count_nospace("test 1");
console.log;
