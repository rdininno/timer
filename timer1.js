const args = process.argv.slice(2);
args.filter(element => element >= 0);
args.sort((a, b) => a - b);

let timer = 0;

for (let ii = 0; ii < args.length; ii++) {
  timer = parseInt(args[ii]) * 1000
  if (timer > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer)
  }
}