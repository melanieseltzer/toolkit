const asdf = 'hello world!';

const lower_case = 'hi';

const someObj = {
  hello: 'hello',
  world: 'world',
};

// `hello` isn't flagged because rest siblings are ignored
const { hello, ...rest } = someObj;

export function blah(hi: any, ...hello_world: any) {
  return 'hi';
}

export {};
