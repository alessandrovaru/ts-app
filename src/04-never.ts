const withoutEnd = () => {
  while (true) {
    console.log('I will never end');
  }
}

const fail = (message: string): never => {
  throw new Error(message);
}


const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('No se que es');
}
