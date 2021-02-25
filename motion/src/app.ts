import { PageComponent } from './components/page.js';

class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) { //appRoot는 HTMLElement타입이다
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}

//html에서 .document가 확실하게 있다고 알려주기 
new App(document.querySelector('.document')! as HTMLElement)