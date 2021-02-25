export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BaseComponent<T extends HTMLElement> implements Component{
    protected readonly element: T; //protected는 자식클래스에서만 접근이 가능하다
    
    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element) //parent 컨테이너 안에 요소를 추가해주는 기능
    }
}