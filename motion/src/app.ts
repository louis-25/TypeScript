import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { PageComponent } from './components/page/page.js';

class App {
    private readonly page: PageComponent;
    
    //.document를 전달받음
    constructor(appRoot: HTMLElement) { //appRoot는 HTMLElement타입이다
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');;
        image.attachTo(appRoot, 'beforeend');

        const note = new NoteComponent('Note Title', 'Note Body');
        note.attachTo(appRoot, 'beforeend');

        const todo = new TodoComponent('Note Title', 'Todo Item');
        todo.attachTo(appRoot, 'beforeend');
    }
}

//html에서 .document가 확실하게 있다고 알려주기 
new App(document.querySelector('.document')! as HTMLElement)