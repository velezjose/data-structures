describe('AVL Tree', function() {
  var avlTree;

  beforeEach(function() {
    avlTree = new AVLTree();
  });

  it('should have methods named "insert", "contains", "remove", "breadthFirstLog" and "depthFirstLog"', function() {
    expect(avlTree.insert).to.be.a('function');
    expect(avlTree.contains).to.be.a('function');
    expect(avlTree.remove).to.be.a('function');
    expect(avlTree.breadthFirstLog).to.be.a('function');
    expect(avlTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    avlTree.insert(5);
    avlTree.insert(2);
    avlTree.insert(6);
    expect(avlTree.root.left.value).to.equal(2);
    expect(avlTree.root.right.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    avlTree.insert(2);
    avlTree.insert(3);
    avlTree.insert(7);
    expect(avlTree.contains(7)).to.equal(true);
    expect(avlTree.contains(8)).to.equal(false);
  });

  it('should have a working "remove" method', function() {
    avlTree.insert(2);
    avlTree.insert(3);
    avlTree.insert(4);
    avlTree.insert(5);// 
    avlTree.insert(6);
    avlTree.insert(7);
    avlTree.insert(8);
    avlTree.insert(9);
    avlTree.insert(10);
    expect(avlTree.contains(2)).to.equal(true);
    avlTree.remove(2);
    expect(avlTree.contains(2)).to.equal(false);
    expect(avlTree.contains(4)).to.equal(true);
    avlTree.remove(4);
    expect(avlTree.contains(4)).to.equal(false);
  });


  it('should find the minimum in the BST', function() {
    avlTree.insert(2);
    avlTree.insert(3);
    avlTree.insert(-20);
    avlTree.insert(4);
    avlTree.insert(423);
    avlTree.insert(99);
    avlTree.insert(6);
    expect(avlTree.min(avlTree.root)).to.equal(-20);
    avlTree.remove(-20);
    expect(avlTree.min(avlTree.root)).to.equal(2);
  });

  it('should find the maximum in the BST', function() {
    avlTree.insert(2);
    avlTree.insert(3);
    avlTree.insert(-20);
    avlTree.insert(4);
    avlTree.insert(423);
    avlTree.insert(99);
    avlTree.insert(6);
    expect(avlTree.max(avlTree.root)).to.equal(423);
    avlTree.remove(423);
    expect(avlTree.max(avlTree.root)).to.equal(99);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    avlTree.insert(2);
    avlTree.insert(3);
    avlTree.insert(-20);
    avlTree.insert(4);
    avlTree.insert(423);
    avlTree.insert(99);
    avlTree.insert(6);
    avlTree.depthFirstLog(func);
    expect(array).to.eql([3, 2, -20, 99, 4, 6, 423]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    avlTree.insert(2);
    avlTree.insert(3);
    avlTree.insert(-20);
    avlTree.insert(4);
    avlTree.insert(423);
    avlTree.insert(99);
    avlTree.insert(6);
    console.log(avlTree);
    avlTree.breadthFirstLog(func);
    expect(array).to.eql([3, 2, 99, -20, 4, 423, 6]);
  });
});
