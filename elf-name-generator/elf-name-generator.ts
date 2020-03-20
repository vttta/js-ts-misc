import {prefixes, suffixes} from './nameparts-dicts.json';

function randomFromDict(obj) {
  let array = Object.entries(obj);
  let randomArrIndex = Math.floor(Math.random() * array.length);

  return array[randomArrIndex];
}

function generateName() {
  let [namePrefixKey, namePrefixValue] = randomFromDict(prefixes);
  let [nameSuffixKey, nameSuffixValue] = randomFromDict(suffixes);
  let [surnamePrefixKey, surnamePrefixValue] = randomFromDict(prefixes);
  let [surnameSuffixKey, surnameSuffixValue] = randomFromDict(suffixes);

  console.log(namePrefixKey + nameSuffixKey, surnamePrefixKey + surnameSuffixKey);
  console.log(namePrefixValue + ',', nameSuffixValue + ';', surnamePrefixValue+ ',', surnameSuffixValue);
}

function generateSeveralNames(times) {
  for (let i = 0; i < times; i++) {
    generateName();
  }
}

generateSeveralNames(10);
