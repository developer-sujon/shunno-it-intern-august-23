const devs = [
  {
    name: "Nahid",
    id: 1001,
    team: "Hishabnikash",
  },
  {
    name: "Sujon",
    id: 1002,
    team: "Hishabnikash",
  },
  {
    name: "Akbar",
    id: 1003,
    team: "Hishabnikash",
  },
];

const output = {};

for (const dev of devs) {
  output[dev.id] = dev;
  delete dev.id;
}

console.log(output);
