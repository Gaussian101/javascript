const countVowel = (string) =>
{
    var m = string.match(/[aeiou]/gi);
    return m.length;
}
console.log(countVowel("robert"))