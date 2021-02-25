export class ImageComponent {
    private element: HTMLElement;
    
    constructor(title: string, url: string) { //html ul요소 생성 및 클래스 지정
        const template = document.createElement('template');
        
        template.innerHTML =`
        <section class="image">
        <div class="image__holder"><img src="" class="image__thumbnail"></div>
        <p class="image__title"></p>
        </section>
        `;
        //element는 template.innerHTML요소를 가리킨다
        this.element = template.content.firstElementChild! as HTMLElement;

        //innerHTML에 직접 데이터를 입력하는 방식은 좋지않다
        //아래와 같이 필요한부분만 수정하자
        const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image__title')! as HTMLElement;
        titleElement.textContent = title;
    }

    //position에 아무것도 지정안될경우 afterbegin이 기본값으로 지정
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element) //parent 컨테이너 안에 요소를 추가해주는 기능
    }
}