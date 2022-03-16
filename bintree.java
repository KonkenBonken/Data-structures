class bintree {
  public static void main(String[] args) {
    Tree tree = new Tree();

    for (String arg : args)
      tree.addNode(new Node(Integer.parseInt(arg)));
  }
}
class Tree {
  Node root;
  public void addNode(Node node) {
    if (root == null)
      root = node;
     else
      root.addNode(node);
  }
}
class Node {
  Node left;
  Node right;
  int value;
  int count = 1;
  public Node(int val) {
    value = val;
  }
  public void addNode(Node node) {
    if (node.value < value) {
      if (left == null)
        left = node;
      else
        left.addNode(node);
    } else if (node.value > value) {
      if (right == null)
        right = node;
      else
        right.addNode(node);
    } else
      count++;
  }
}
