let len = process.argv.length;
let sum = 0;
for (var i = 2; i < len; i++) {
            sum += Number(process.argv[i]);
}
console.log(sum);