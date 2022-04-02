let attributeList = [];

sodas.forEach( obj=> {
  let name = obj.name;
  let price = obj.price;

  attributeList.push([name, price]);
});
console.log(attributeList)

let attributeList = [];

sodas.forEach( obj=> {
  let name = obj.name;
  let sugarFree = obj.sugarFree;
  let energy = obj.energy

  attributeList.push([name, energy, sugarFree]);
});
console.log(attributeList);


// matt's solution
sodas.forEach(soda => {
    let output = '';
    attributeList.forEach((attribute, index) => {
        output += `${attribute}: ${soda[attribute]}, `;
    })
    console.log(output);
});
