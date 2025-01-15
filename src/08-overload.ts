// Nico == [N,i,c,o] => string => string[]
// [N,i,c,o] == Nico => string[] => string

// Overload

function parseStr(input: string| string[]): string|string[] {
  if(Array.isArray(input)){
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseStr('Nico');
console.log('rtaArray', rtaArray);

const rtaString = parseStr(['N','i','c','o']);
console.log('rtaString', rtaString);
