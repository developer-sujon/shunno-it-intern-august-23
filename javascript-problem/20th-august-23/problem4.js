const team = [20, 30, 40, 50, 55];

const newArray = [];

for (let i = 0; i < team.length; i = i + 2) {
  newArray.push(team.slice(i, i + 2));
}
console.log(newArray);
