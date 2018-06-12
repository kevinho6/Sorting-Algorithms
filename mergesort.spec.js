describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an array of one element', function(){
    expect( mergeSort([5]) ).toEqual( [5] );
  });

  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4, 5])[0]).toEqual([1, 2]);
    expect(split([1, 2, 3, 4, 5])[1]).toEqual([3, 4, 5]);
  });

  it('is able to merge two unsorted arrays into a sorted array', function() {
    expect(merge([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles a regular array', function(){
    expect( mergeSort([22, 1, -5, 15]) ).toEqual( [-5, 1, 15, 22] );
  });
});
