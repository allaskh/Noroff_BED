const shouldFail = process.argv.includes('--fail');

if (shouldFail) {
  console.error('Operation failed!');
  process.exit(1); // Exit with a non-zero code (Error)
} else {
  console.log('Operation succeeded!');
  process.exit(0); // Exit with code 0 (Success)
}