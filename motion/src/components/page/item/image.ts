import { BaseComponent } from './../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement>{    
    constructor(title: string, url: string) { //html ul요소 생성 및 클래스 지정
                
        super(`
            <section class="image">
            <div class="image__holder"><img src="" class="image__thumbnail"></div>
            <h2 class="image__title"></h2>
            </section>
        `);                

        //innerHTML에 직접 데이터를 입력하는 방식은 좋지않다
        //아래와 같이 필요한부분만 수정하자
        const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image__title')! as HTMLElement;
        titleElement.textContent = title;
    }
    
}