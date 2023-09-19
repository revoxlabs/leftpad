// Sample leftpad implementation taken from npm 'left-pad'
const leftPad = (str: string, len: number, ch?: string): string => {
  let i: number = -1;
  ch ?? ' ';
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  // Return mutated string
  return str;
};

/**
 * leftpad implementation using additional ts features
 * some implementation may not follow best practices, for demonstration only
 */

// Type of acceptable lefPad input
type LeftPadObj = string | number; // via template literal strings

// leftpad integration using generics
const genericLeftPad = <T extends LeftPadObj>(
  padObj: T,
  len: number,
  char?: T
): string => {
  return String(padObj).padStart(len, char ? String(String) : undefined); // Using ES6 padStart built in function
};

// Sample performance checker
const run = (
  fn: Function,
  count: number,
  ...args: [str: LeftPadObj, len: number, ch?: LeftPadObj] // Using strict pattern definition like this is not recommended when using rest parameters
) => {
  const startTime = performance.now();
  for (let i = 0; i < count; i++) {
    fn.apply(null, args);
  }
  return performance.now() - startTime;
};

// Running performance check
const perfCount: number[] = [100, 1000, 10000]
perfCount.forEach((count) => {
  console.log(`=====================\nTesting performance count: ${count}\n=====================`)
  perfCount.forEach((len) => {
    console.log(`Testing string length: ${len}`)

    // Run npm package function
    console.log(`Running NPM ${run(leftPad, count, 'string', len, '*')}`)

    // Run ES6 built-in function
    console.log(`Running ES6 ${run(genericLeftPad<string>, count, 'string', len, '*')} \n`)
  })
})

type PadObjectMethod = {
  len: number,
  char?: string
}

// Sample Class definition of a StringObject
class PadObject<T extends LeftPadObj> {
  str: string;

  constructor(s: T) {
    this.str = String(s);
  }

  leftPadNpm(len: number, char?: string): string {
    return leftPad(this.str, len, char);
  }

  leftPadJs(len: number, char?: string): string {
    return genericLeftPad(this.str, len, char);
  }
}
