const asdf = 'hello world!';

const lower_case = 'hi';

const someObj = {
  hello: 'hello',
  world: 'world',
};

// rest siblings are ignored
const { hello, ...rest } = someObj;

export function blah(hi, ...hello_world) {
  return 'hi';
}

export {};
