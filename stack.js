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

const peek = stack => {
	return stack.top.data;
};

const display = stack => {
	let current = stack.top;
	while(current !== null) {
		console.log(current.data);
		current = current.next;
	}
};

const isEmpty = stack => {
	return stack.top === null;
};

// function main() {

// 	const starTrek = new Stack();

// 	starTrek.push('Kirk');
// 	starTrek.push('Spock');
// 	starTrek.push('McCoy');
// 	starTrek.push('Scotty');

// 	console.log('[=/=/=/=/=/=/=/=/=/=/=]');
// 	console.log('Before removing McCoy\n\n"Top"\n');
// 	display(starTrek);

// 	starTrek.pop();
// 	starTrek.pop();

// 	console.log('\n[=/=/=/=/=/=/=/=/=/=/=]');
// 	console.log('After removing McCoy\n\n"Top"\n');

// 	display(starTrek);
// }

// main();


/**
 * Checking for palindromes
 */

const is_palindrome = str => {

	const stack = new Stack();

	for(let i = 0 ; i < str.length; i++) {
		stack.push(str[i]);
	}

	for(let i = 0; i < str.length; i++) {
		if(stack.pop() !== str[i]) {
			return false;
		}
	}

	return true;
};

// let test =[
// 	'dad',
// 	'1001',
// 	'false'
// ];

// for(let i = 0; i < test.length; i++) {
// 	console.log(is_palindrome(test[i]));
// }


/**
 * Matching parentheses in an expression
 */

const match_parentheses = exp => {

	/**
	 * Sets up the stack
	 */
	const stack = new Stack();

	for(let i = 0; i < exp.length; i++) {
		let c = exp[i];
		switch(c){
		case '(':
			stack.push(c);
			break;
		case ')':
			stack.push(c);
			break;
		default:
		}
	}

	/**
	 * Checks for matching parens
	 */

	for(let i = 0; i < exp.length; i++) {
		if( exp[i] === '(' && stack.pop() !== ')'){
			return i;
		}
		if( exp[i] === ')' && stack.pop() !== '(') {
			return i;
		}
	}
	return true;
};

// let test_exp = '(1+2)'; // true
// let test_exp_2 = '((1+2)'; // return 1

// console.log(match_parentheses(test_exp));
// console.log(match_parentheses(test_exp_2));


/**
 * Sort Stack
 */

const sortStack = unsorted => {

	const sorted = new Stack();

	while(!isEmpty(unsorted)) {

		let temp = peek(unsorted);
		unsorted.pop();

		while(!isEmpty(sorted) && temp > peek(sorted)) {
			unsorted.push(sorted.pop());
		}

		sorted.push(temp);
	}
	return sorted;
};


// const test_stack = new Stack();

// test_stack.push(5);
// test_stack.push(1);
// test_stack.push(3);
// test_stack.push(7);

// display(test_stack);

// display(sortStack(test_stack));



