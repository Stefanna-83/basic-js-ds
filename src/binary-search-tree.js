const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
constructor() {
   this.my_root = null;
}

  root() {
    return this.my_root;
  }

  add(data) {
       

    function add_elem(node, data) {
      if (!node) {
        return new Node(data); 
      }

      if (node.data === data) {
        return node;
      }

      if (data<node.data) {
     node.left = add_elem(node.left, data)
    } else {
      node.right = add_elem(node.right, data);
    }
    return node;
  }
  this.my_root = add_elem(this.my_root, data);
  }

  has(data) {
   
   function search(node, data) {
    if (!node) {
      return false; 
    }

    if (node.data === data) {
      return true;
    }

    if (data<node.data) {
   return search(node.left, data);
  } else {
    return search(node.right, data);
  }
   }
   return search(this.my_root, data);
  }

 find(data) {
   
    function get_elem(node, data) {
     if (!node) {
       return null; 
     }
 
     if (node.data === data) {
       return node;
     }
 
     if (data<node.data) {
    return get_elem(node.left, data);
   } else {
     return get_elem(node.right, data);
   }
    }
    return get_elem(this.my_root, data);
  }

  remove(data) {
   
    function remover(node, data) {
     if (!node) {
       return null; 
     }

     if (data<node.data) {
      node.left = remover(node.left, data);
return node;
     } else if (data>node.data) {
      node.right = remover(node.right, data);
      return node;
     }
     else {
      if (!node.left && !node.right) {
       return null;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }
      
      if (!node.right) {
        node = node.left;
        return node;
      }

      let min_right = node.right;
      while (min_right.left) {
        min_right = min_right.left;
      }
      node.data = min_right.data;
      node.right = remover(node.right, min_right.data);
      return node;
      }  
    }
    this.my_root = remover(this.my_root, data);
  }

  min() {
    if (!this.my_root) {    
      return null;
    }
      let node = this.my_root;
      while (node.left) {
        node = node.left;
      }
      return node.data;
    }
  

  max() {
    if (!this.my_root) {    
      return null;
    }
      let node = this.my_root;
      while (node.right) {
        node = node.right;
      }
      return node.data;
  }
}


module.exports = {
  BinarySearchTree
};