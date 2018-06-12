describe('Bubble Sort', function(){
  let counterObject = {
    swapCounter: 0,
    comparisonCounter: 0,
  }

  beforeEach(function() {
    counterObject.swapCounter = counterObject.comparisonCounter = 0;
  });

  it('handles an empty array', function(){
    expect( bubbleSort([], counterObject) ).toEqual( [] );
  });

  it('handles an regular array', function(){
    expect( bubbleSort([22, 1, -5, 15], counterObject) ).toEqual( [-5, 1, 15, 22] );
  });

  it('has the right number of swaps', function(){
    bubbleSort([22, 1, -5, 15], counterObject);
    expect(counterObject.swapCounter).toEqual(4);
  });

  it('has the right number of comparisons', function(){
    bubbleSort([22, 1, -5, 15], counterObject);
    expect(counterObject.comparisonCounter).toEqual(6);
  });
});
