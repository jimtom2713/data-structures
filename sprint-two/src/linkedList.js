var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.idx = 0;
  list.storage = {};

  list.addToTail = function(value){
    var newNode = new Node(value);
    if(list.head === null){
      list.head = newNode;
    }
    list.tail = newNode
  };

  list.removeHead = function(){
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
