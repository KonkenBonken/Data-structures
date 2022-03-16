import java.util.ArrayList;
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
  public ArrayList<Node> traverse(boolean duplicates) {
    ArrayList<Node> list = new ArrayList<Node>();
    if (root == null)
      return list;
     // System.out.println("no root");
    else {
      ArrayList<Node> sorted = root.traverse(list);
      if (!duplicates) return sorted;

      ArrayList<Node> nums = new ArrayList<Node>();
      for (Node node : sorted) {
        for (int i = 1; i <= node.count; i++) {
          nums.add(node);
        }
      }
      return nums;
    }
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
  public ArrayList<Node> traverse(ArrayList<Node> list) {
    if (left != null) {
      left.traverse(list);
    }
    list.add(this);
    // System.out.println(value);
    if (right != null) {
      right.traverse(list);
    } else
      return list;
      // System.out.println("stop");
    return list;
  }
}
