// create Tree
class Node {
    constructor(){
   this.key = 0;
   this.left = this.right = null;
}
}

// A utility function to create a new BST node
function newNode(item) {
   var temp = new Node();
   temp.key = item;
   temp.left = null;
   temp.right = null;
   return temp;
}

// A utility function to do inorder traversal of BST
function inorder(root) {
   if (root != null) {
       inorder(root.left);
       console.log(root.key + " ");
       inorder(root.right);
   }
}

/*
* A utility function to insert a new node with given key in BST
*/
function insert(node, key)
{

   /* If the tree is empty, return a new node */
   if (node == null)
       return newNode(key);

   /* Otherwise, recur down the tree */
   if (key < node.key)
       node.left = insert(node.left, key);
   else
       node.right = insert(node.right, key);

   /* return the (unchanged) node pointer */
   return node;
}

// Function to print all odd nodes
function oddNode(root) {
   if (root != null) {
       oddNode(root.left);

       // if node is odd then print it
       if (root.key % 2 != 0)
           console.log(root.key + " ");

       oddNode(root.right);
   }
}

   var root = null;
   root = insert(root, 5);
   root = insert(root, 3);
   root = insert(root, 2);
   root = insert(root, 4);
   root = insert(root, 7);
   root = insert(root, 6);
   root = insert(root, 8);

   oddNode(root);
