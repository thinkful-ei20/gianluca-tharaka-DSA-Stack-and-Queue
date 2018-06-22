class _Node {
	constructor(value) {
		this.value=value,
		this.next=null,
		this.prev=null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	enqueue(data) {
		const node = new _Node(data);

		if(this.first === null) {
			this.first = node;
		}

		if(this.last) {
			node.next = this.last;
			this.last.prev = node;
		}

		this.last = node;
	}

	dequeue() {
		if(this.first === null) {
			return;
		}

		const node = this.first;
		this.first = node.prev;

		if(node === this.last) {
			this.last = null;
		}

		return node.value;
	}
}

const peek = queue => {
	return queue.first.data;
};

const isEmpty = queue => {
	return queue.first === null;
};

const displayFromFront = queue => {
	let current = queue.first;
	while(current !== null) {
		console.log(current.value);
		current = current.prev;
	}
	return;
};

const displayFromBack = queue => {
	let current = queue.last;
	while(current !== null) {
		console.log(current.value);
		current = current.next;
	}
	return;
};

// function main() {
// 	const starTrekQ = new Queue();

// 	starTrekQ.enqueue('Kirk');
// 	starTrekQ.enqueue('Spock');
// 	starTrekQ.enqueue('Uhura');
// 	starTrekQ.enqueue('Sulu');
// 	starTrekQ.enqueue('Checkov');

// 	console.log('\nFrom front:\n');
// 	displayFromFront(starTrekQ);

// 	// console.log('\nFrom back:\n');
// 	// displayFromBack(starTrekQ);

// 	starTrekQ.dequeue();
// 	starTrekQ.dequeue();

// 	console.log('\nSpock is gone!');
// 	displayFromFront(starTrekQ);

// }

// main();

/**
 * Square Dance Pairing
 */

const arr = [
	['F', 'Jane'],
	['M', 'Bob'],
	['M', 'Bill'],
	['F', 'Sarah'],
	['M', 'Joe'],
	['F', 'Jill'],
	['M', 'Mike'],
	['M', 'Sam'],
	['M', 'David'],
];

const squareDancePairing = people => {

	const men = new Queue();
	const women = new Queue();

	let count = 0;

	for(let i = 0; i < people.length; i++) {
		if(people[i][0] === 'M') {
			men.enqueue(people[i]);
			count++;
		} 
		else {
			women.enqueue(people[i]);
			count++;
		}
	}

	while(!isEmpty(men) && !isEmpty(women)) {
		console.log(`Female dancer is: ${women.dequeue()[1]} and the male dancer is:${men.dequeue()[1]}`);
		count -= 2;
	}

	if(!isEmpty(women)) {
		console.log(`There are ${count} female dancers waiting to dance`);
	}

	if(!isEmpty(men)) {
		console.log(`There are ${count} male dancers waiting to dance`);
	}
};

squareDancePairing(arr);
