let offerCoke = 0;
let cap = 0;
let totalCoke = 0;
let remainingCap = 0;

const calculateCokeAndCap = (coke) => {
  offerCoke = Math.floor(coke / 3);
  totalCoke = totalCoke + offerCoke;
  cap = (coke % 3) + offerCoke;

  if (cap > 3) {
    offerCoke = Math.floor(cap / 3);
    cap = cap - offerCoke * 3;
    totalCoke = totalCoke + offerCoke + coke;
    remainingCap = Math.floor(cap % 3) + cap;

    return calculateCokeAndCap(cap + offerCoke);
  } else {
    return (remainingCap = cap);
  }
};

calculateCokeAndCap(14);

console.log("\nTotal Coke: ", totalCoke, "\nRemaining Cap:", remainingCap);
