const { HashMap } = require('./hashMap');

function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = .5;
  lotr.SIZE_RATIO = 3;
  lotr.set("Hobbit", "Bilbo")
  lotr.set("Hobbit", "Frodo")
  lotr.set("Wizard", "Gandolf")
  lotr.set("Human", "Aragorn")
  lotr.set("Elf", "Legolas")
  lotr.set("Maiar", "The Necromancer")
  lotr.set("Maiar", "Sauron")
  lotr.set("RingBearer", "Gollum")
  lotr.set("LadyOfLight", "Galadriel")
  lotr.set("HalfElven", "Arwen")
  lotr.set("Ent", "Treebeard")
  // console.log('Maiar Key:', lotr.get('Maiar'))
  // console.log('Hobbit key:', lor.get('Hobbit'))
  return lotr;
}


const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

console.log(WhatDoesThisDo())


function duplicate(str) {
  let dup = new HashMap();

  for (let i = 0; i < str.length; i++) {
    dup.set(str[i], str[i])
  }
  console.log(dup)

  let newStr = '';
  dup._hashTable.forEach(letter => {
    newStr += letter.value;
  })
console.log(newStr)
}
console.log(duplicate('google'))

function palindrome(str) {
  const pMap = new HashMap();
  console.log(pMap)
  let odd = 0
  for(let i = 0; i < str.length; i++) {
    if(pMap.get(str[i]) === undefined) {
      console.log(str[i])
      pMap.set(str[i], 1)
      console.log(pMap)
    }
  }
}

function palindrome(str) {
  const pMap = new HashMap();
  console.log('p', pMap)
  let odd = 0
  for (let i = 0; i < str.length; i++) {
    if (pMap.get(str[i]) === undefined) {
      console.log(str[i])
      pMap.set(str[i], 1)
      console.log(pMap)
    }
    else {
      let char = pMap.get(str[i])
      pMap.set(str[i], char += 1)
      console.log('char', char)
    }
  }
  for (let i = 0; i < pMap.size; i++) {
    if (pMap.get(str[i]) % 2 !== 0) {
      odd++
      console.log('odd', odd)
    }
    if (odd > 1) {
      return false
    }
  }
  return true
}
console.log(palindrome('acecarr'))
