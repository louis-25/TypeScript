import { BaseComponent } from './../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
    constructor() { //html ul요소 생성 및 클래스 지정
        super('<ul class="page">This is PageComponent!</ul>')
    }    
}