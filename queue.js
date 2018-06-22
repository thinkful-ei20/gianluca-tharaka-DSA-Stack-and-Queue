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

const squareDancePairing = arr => {
	const spares = new Queue();

	let person = '';
	for(let i = 0; i < arr.length; i++) {
		if(!person) person = arr[i];
		else {
			if(arr[i][0] !== person[0]) {
				console.log(`Female Dancer is: ${person[0] === 'F'? person[1] : arr[i][0]}
				and the male dancer is: Frank ${person[0] === 'M'? person[1]: arr[i][0]}`);
			} else {
				spares.enqueue(arr[i]);
			}
		}
	}

	
};



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