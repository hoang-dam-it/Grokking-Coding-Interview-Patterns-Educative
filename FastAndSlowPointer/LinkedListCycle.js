import LinkedList from "../_Share/LinkedList";
import {
  printListWithForwardArrow,
  printListWithForwardArrowLoop,
} from "../_Share/LinkedList";


function detectCycle(head) {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
}

function main()
{
    input = [
      [2, 4, 6, 8, 10, 12],
      [1, 3, 5, 7, 9, 11],
      [0, 1, 2, 3, 4, 6],
      [3, 4, 7, 9, 11, 17],
      [5, 1, 4, 9, 2, 3],
    ];

     pos = [0, -1, 1, -1, 2];

     for (var i = 0; i < input.length; i++) {
       inputLinkedList = new LinkedList();
       inputLinkedList.createLinkedList(input[i]);
       console.log(i + 1 + ".\tInput:");
       if (pos[i] === -1) {
         console.log("\t", printListWithForwardArrow(inputLinkedList.head));
       } else {
         console.log("\t", printListWithForwardArrowLoop(inputLinkedList.head));
       }
       console.log("\tpos: ", pos[i]);
       if (pos[i] != -1) {
         var length = inputLinkedList.getLength(inputLinkedList.head);
         lastNode = inputLinkedList.getNode(inputLinkedList.head, length - 1);
         lastNode.next = inputLinkedList.getNode(inputLinkedList.head, pos[i]);
       }

       var result = detectCycle(inputLinkedList.head) ? "True" : "False";

       console.log("\n\tDetected cycle =", result);
       console.log("-".repeat(100), "\n");
     }
}