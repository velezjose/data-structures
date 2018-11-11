describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should return size of the set', function() {
    set.add('Mel Gibson');
    set.add('Shaquille O\'neill');
    set.add('anything');
    expect(set.size()).to.equal(3);
  });

  it('should return true when empty and false when not empty', function() {
    set.add('Mel Gibson');
    expect(set.isEmpty()).to.equal(false);
    set.remove('Mel Gibson');
    expect(set.isEmpty()).to.equal(true);
  });

  // todo
  it('should iterate over the values of the set', function() {
    var cb = function(value) { console.log(value); }
    set.add(4);
    expect(console.log.calledWith(4)).to.be.true;
  });

});
