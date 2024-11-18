const func = require('./func.js');

test('Expect winning hand to be 2 of Hearts and 2 of Diamonds (3 of a kind)', () => {
    expect(func(["2C", "10S", "5H", "AD", "KS"], [["2H", "2D"], ["5D", "KH"]])).toEqual(["2H", "2D"]);
});

test('Expect winning hand to be 5 of Diamonds, King of Hearts (full house)', () => {
    expect(func(["2C", "10S", "5H", "KD", "KS"], [["2H", "2D"], ["5D", "KH"]])).toEqual(["5D", "KH"]);
});

test('Expect winning hand to be 10 of Hearts and 3 of Diamonds (one pair)', () => {
    expect(func(["2C", "10S", "5H", "AD", "KS"], [["10H", "3D"], ["5D", "QD"]])).toEqual(["10H", "3D"]);
});

test('Expect winning hand to be 10 of Hearts and 2 of Diamonds (two pair)', () => {
    expect(func(["2C", "10S", "5H", "AD", "KS"], [["10H", "2D"], ["5D", "QD"]])).toEqual(["10H", "2D"]);
});

test('Expect winning hand to be 4 of Diamonds and Ace of Diamonds (high card)', () => {
    expect(func(["2C", "10S", "5H", "QD", "KS"], [["9H", "3D"], ["4D", "AD"]])).toEqual(["4D", "AD"]);
});

test('Expect winning hand to be Ace of Hearts and Ace of Diamonds (4 of a kind)', () => {
    expect(func(["AC", "10S", "5H", "QD", "AS"], [["10H", "10D"], ["AH", "AD"]])).toEqual(["AH", "AD"]);
});

test('Expect winning hand to be 10 of Clubs and King of Diamonds (Straight)', () => {
    expect(func(["JC", "10S", "5H", "QD", "AS"], [["10H", "10D"], ["10C", "KD"]])).toEqual(["10C", "KD"]);
});

test('Expect winning hand to be King of Diamonds and 10 of Diamonds (Straight Flush)', () => {
    expect(func(["JC", "10S", "9D", "JD", "QD"], [["KC", "10C"], ["KD", "10D"]])).toEqual(["KD", "10D"]);
});

test('Expect winning hand to be King of Clubs and 9 of Clubs (Flush)', () => {
    expect(func(["2C", "10C", "7C", "JD", "QD"], [["KC", "9C"], ["QS", "JS"]])).toEqual(["KC", "9C"]);
});

test('Expect winning hand to be Ace of Clubs and King of Clubs (Royal Flush)', () => {
    expect(func(["2S", "5D", "10C", "JC", "QC"], [["AC", "KC"], ["9C", "8C"]])).toEqual(["AC", "KC"]);
});

test('Expect function to return "CHEATER!"', () => {
    expect(func(["2S", "5D", "10C", "JC", "AC"], [["AC", "KC"], ["9C", "8C"]])).toEqual("CHEATER!");
});
