export class PageComponent {
    private element: HTMLUListElement;
    
    constructor() { //html ul요소 생성 및 클래스 지정
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent';
    }

    //position에 아무것도 지정안될경우 afterbegin이 기본값으로 지정
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element) //parent 컨테이너 안에 요소를 추가해주는 기능
    }
}