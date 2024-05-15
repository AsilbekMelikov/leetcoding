/* LIST NODES */

function ListNodes(value, next) {
  this.value = value === undefined ? 0 : value;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNodes(2);
const node2 = new ListNodes(4);
const node3 = new ListNodes(3);
const node4 = new ListNodes(5);
const node5 = new ListNodes(6);
const node6 = new ListNodes(4);

node1.next = node2;
node2.next = node3;
node4.next = node5;
node5.next = node6;

const l1 = node1;
const l2 = node4;

const AddTwoListNodeNumbers = (l1, l2) => {
  // It is the first way of the solution
  const ConvertReverseListNodeToArray1 = (listNode) => {
    let returnedArray = [];

    while (listNode !== null) {
      returnedArray.push(listNode.value);
      listNode = listNode.next;
    }
    returnedArray.reverse();

    return returnedArray;
  };

  // It is the second way of the solution
  const ConvertReverseListNodeToArray2 = (listNode) => {
    let returnedArray = [];

    if (listNode.next !== null) {
      returnedArray = returnedArray.concat(
        ConvertReverseListNodeToArray2(listNode.next)
      );
    }

    returnedArray.push(listNode.value);

    return returnedArray;
  };

  const l1Array = ConvertReverseListNodeToArray2(l1);
  const l2Array = ConvertReverseListNodeToArray2(l2);

  let newTotal = BigInt(l1Array.join("")) + BigInt(l2Array.join(""));

  let splitNewTotal = newTotal.toString().split("");
  // console.log(splitNewTotal[0]);

  let returnedListNodes = null;

  for (let i = 0; i < splitNewTotal.length; i++) {
    returnedListNodes = {
      value: splitNewTotal[i],
      next: returnedListNodes,
    };
  }

  return returnedListNodes;
};

console.log(AddTwoListNodeNumbers(l1, l2));
