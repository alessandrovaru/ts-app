export const createProduct = (
  id: string | number,
  isNew: boolean = false,
  stock: number = 10
) => {
  return {
    id,
    stock: stock,
    isNew: isNew
  };
}

// 0 === false
// "" === false
// false === false
// this won't work as expected with optional parameters unless we use the nullish coalescing operator ?? instead of ||


const p1 = createProduct('1',true, 10);

console.log(p1);
