const args = process.argv.slice(2).filter(arg => !isNaN(arg) && Number(arg) >= 0).map(arg => Number(arg)).sort((a, b) => a - b);

const timer = (arguments) => {
  if (arguments.length === 0) {
    return process.stdout.write("Please input arguments");
  }
  for (let arg of arguments) {
    setTimeout(() => {
      console.log("BEEP")
      process.stdout.write('\x07');
    }, 1000 * arg)
  }
}

timer(args);