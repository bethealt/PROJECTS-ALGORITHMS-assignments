//FRONTS

//CLASSES
    class Node {
        constructor(val) {
            this.val = value;
            this.next = null;
        }
    }
    class SLL {
        constructor() {
            this.head = null;
        };

//Add Front
/*Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.*/

    addFront(val) {
       var newHeadNode = new Node(val);
       if(!self.head) {
           self.head = newHeadNode;
            return self;
       }
       newHeadNode.next=this.head;
       this.head = newHeadNode;
       return newHeadNode;      //return this
    }
 
//Remove Front
/*Write a method to remove the head node and return the new list head node. If the list is empty, return null.*/

    removeFront() {
        var newHeadNode = self.head.next;
        if(!self.head) {
            self.head = newHeadNode;
        }
        return newHeadNode;
    }

//Front
/*Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.*/

    front() {
        if(!self.head) {
            var headValue = self.head.value;
            return headValue;
        }
        return null;
    }
}