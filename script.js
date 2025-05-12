const makeChange = (c) => {
  const change = {
    q: 0,  // quarters
    d: 0,  // dimes
    n: 0,  // nickels
    p: 0   // pennies
  };

  // Calculate quarters (25 cents)
  change.q = Math.floor(c / 25);
  c = c % 25;

  // Calculate dimes (10 cents)
  change.d = Math.floor(c / 10);
  c = c % 10;

  // Calculate nickels (5 cents)
  change.n = Math.floor(c / 5);
  c = c % 5;

  // Calculate pennies (1 cent)
  change.p = c;

  return change;
};

// Do not change the code below
const c = parseInt(prompt("Enter c: "), 10); 
alert(JSON.stringify(makeChange(c)));
