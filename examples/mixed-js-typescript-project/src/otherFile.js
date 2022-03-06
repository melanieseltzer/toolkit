const asdf = 'hello world!';

const someObj = {
  hello: 'hello',
  world: 'world',
};

// `hello` isn't flagged because rest siblings are ignored
const { hello, ...rest } = someObj;

export function blah(hi, ...hello_world) {
  return 'hi';
}

export {};
