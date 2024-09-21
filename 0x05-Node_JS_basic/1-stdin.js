/**
 * Executes through the command line
 */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (chunk) => {
  if (chunk) {
    process.stdout.write(`Your name is ${chunk.toString()}`);
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
