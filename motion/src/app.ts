import { Component } from './components/component.js';
import { InputDialog } from './components/fialog/dialog.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

class App {
    private readonly page: Component & Composable;
    
    //.document를 전달받음
    constructor(appRoot: HTMLElement) { //appRoot는 HTMLElement타입이다
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');;
        //image.attachTo(appRoot, 'beforeend');
        this.page.addChild(image);

        const note = new NoteComponent('Note Title', 'Note Body');
        //note.attachTo(appRoot, 'beforeend');
        this.page.addChild(note);

        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/_NzL5UGgN2Y');
        //video.attachTo(appRoot, 'beforeend');
        this.page.addChild(video);

        const todo = new TodoComponent('Todo Title', 'Todo Item');
        //todo.attachTo(appRoot, 'beforeend');
        this.page.addChild(todo);

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(document.body);
            });
            dialog.setOnCloseListener(()=> {
                // 섹션을 만들어서 페이지에 추가 해준다
                dialog.removeFrom(document.body);
            });

            dialog.attachTo(document.body);
        })
    }
}

//html에서 .document가 확실하게 있다고 알려주기 
new App(document.querySelector('.document')! as HTMLElement)