import { Component } from './../component.js';
import { BaseComponent } from './../component.js';

export interface Composable {
    addChild(child: Component): void;
}
type OnCloseListener = () => void;

// 컴포넌트들을 한번더 감싸주는 역할 + 삭제버튼추가
class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
    private closeListener?: OnCloseListener;
    constructor() {
        super(`<li class="page-item">
                <section class="page-item__body"></section>
                <div class="page-item__controls">
                    <button class="close">&times;</button>
                </div>
            </li>`);
            const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
            closeBtn.onclick = () => {
                this.closeListener && this.closeListener();
            }
    }
    addChild(child: Component) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }
    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
    }
}
export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable{
    constructor() { //html ul요소 생성 및 클래스 지정
        super('<ul class="page"></ul>')
    }    
    
    addChild(section: Component) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        })
    }
}