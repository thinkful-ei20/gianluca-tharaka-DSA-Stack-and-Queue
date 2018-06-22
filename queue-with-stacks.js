class _Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}

	push(data) {
		if(this.top === null) {
			this.top = new _Node(data, null);
			return this.top;
		}

		const node = new _Node(data, this.top);
		this.top = node;
	}

	pop() {
		const node = this.top;
		this.top = node.next;
		return node.data;
	}
}

const isEmpty = stack => {
	return stack.top === null;
};

class Queue {
	constructor() {
		this.stack_1 = new Stack();
		this.stack_2 = new Stack();
	}

	enqueue(data) {
		this.stack_1.push(data);
	}

	dequeue() {

		// if(isEmpty(this.stack_1)) {
		// 	return console.log('Queue is Empty!');
		// }

		// let dQ;
		// while(!isEmpty(this.stack_1)) {
		// 	dQ = this.stack_1.pop();
		// 	this.stack_2.push(dQ);
		// }

		// dQ = this.stack_2.pop();
		// while(!isEmpty(this.stack_2)) {
		// 	this.stack_1.push(this.stack_2.pop());
		// }

		// return dQ;


		if(isEmpty(this.stack_2)) {
			while(!isEmpty(this.stack_1)) {
				this.stack_2.push(this.stack_1.pop());
			}
		}

		return this.stack_2.pop();

	}

	peek() {
		return peek(this.stack_2);
	}
}

// const peek = queue => {
// 	return queue.stack_1.top.data;
// };

const peek = stack => {
	return stack.top.data;
};

const display = queue => {
	let current = queue.stack_1.top;
	while(current !== null) {
		console.log(current.data);
		current = current.next;
	}
};

function main() {
	const starTrekQ = new Queue();

	starTrekQ.enqueue('Kirk');
	starTrekQ.enqueue('Spock');

	console.log(starTrekQ.dequeue());
	console.log(starTrekQ.dequeue());

	starTrekQ.enqueue('Checkov');

	// console.log('\nFrom back:\n');
	// displayFromBack(starTrekQ)

	// console.log('\nFrom Back to Front:\n');
	//display(starTrekQ);


	starTrekQ.enqueue('Uhura');
	starTrekQ.enqueue('Sulu');

	console.log(starTrekQ.dequeue());
	console.log(starTrekQ.dequeue());

	console.log(starTrekQ);
	//display(starTrekQ);
}

main();



/**
 * 		Stack 1:
 *
 * 		3
 * 		2
 * 		1
 *
 * 		Stack 2:
 * 
 *		
 * 		2
 * 		3	
 * 		
 * 		
 */