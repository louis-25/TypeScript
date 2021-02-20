interface Stack {
    readonly size: number;
    push(value: string): void; //배열에 값을 넣어준다
    pop(): string; //가장 나중에들어온 값을 제거후 반환함
}

type StackNode = {
    //한번 값이 입력되면 변경 X
    readonly value: string;
    readonly next?: StackNode | undefined;
}

//보통 인터페이스를 구현하는 클래스에 Impl을 붙여준다
class StackImpl implements Stack {
    //보통 변수에 _를 붙이면 내부에서만 쓰이는 변수로 알면된다
    private _size: number = 0;
    private head?: StackNode;
    
    constructor(private capacity: number) {}

    get size() {
        return this._size;
    }
    push(value: string) {        
        if(this.size === this.capacity) {
            throw new Error('Stack is full!');
        }
        const node: StackNode = {value, next: this.head};
        this.head = node;
        this._size++;
    }
    pop(): string {
        if(this.head == null) { // stack이 비어있는경우
            throw new Error('Stack is empty!');
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}
    
const stack = new StackImpl(10);
stack.push('test 1');
stack.push('test 2');
stack.push('test 3');
while(stack.size !== 0) {
    console.log(stack.pop());
}
