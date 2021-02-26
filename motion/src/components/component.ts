export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

//<T extends HTMLElement> - 타입이 HTMLElement라고 지정
export class BaseComponent<T extends HTMLElement> implements Component{
    protected readonly element: T; //protected는 상속된 자식클래스에서 접근이 가능하다
    
    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element) //parent 컨테이너 안에 요소를 추가해주는 기능
    }
}