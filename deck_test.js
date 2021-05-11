var expect = chai.expect;

describe('CardFunctions', function() {
    describe('CardConstruction', function() {
        it('should create cards correctly', function() {
            let card1 = new Card(0, 1); // = doSomething('Hello', 5);
            expect( card1.desc() ).to.equal("♠",  "A")//expect(x).to.equal('Hello5');
            let card2 = new Card(1, 2);
            expect(Card2().to .equal("♥", "2"))
        })
