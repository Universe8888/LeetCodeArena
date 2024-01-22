/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {

    let carry = 0;
    let sum = 0;
    let head = new ListNode(0);
    let current = head;
    
    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next) 
    };

    function addCarry(carry){
        if(carry){
            current.next = new ListNode(carry);
        }
    };

    while(l1 || l2){
        sum = 0;
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }

        sum += carry;
        carry = 0;

        if(sum > 9){
            carry = 1;
            sum = sum % 10;
        }

        current.next = new ListNode(sum);
        current = current.next;
    }

    addCarry(carry);

    return head.next;
};


console.log(addTwoNumbers([2,4,3],[5,6,4])); // [7,0,8]
console.log('-------------------------------------');
console.log(addTwoNumbers([0],[0])); // [0]
console.log('-------------------------------------');
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9])); // [8,9,9,9,0,0,0,1]