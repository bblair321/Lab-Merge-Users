require('datejs');

const usernames1 = [
  "coolCat123",
  "sunshine_89",
  "bluePenguin",
  "fastRunner",
  "nightOwl",
];

const usernames2 = [
  "alphaWolf",
  "pixelPirate",
  "neonNinja",
  "lunarLight",
  "cryptoQueen",
];

const usernames3 = [
  "gamer_guy",
  "bookworm42",
  "musicLover",
  "travelBug",
  "coffeeAddict",
];

function combineUsers(...usernamesArrays) {
  const combinedObject = { users: [] };

  for (const arr of usernamesArrays) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = { combineUsers };
