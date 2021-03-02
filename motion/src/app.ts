import { Component } from './components/component.js';
import { InputDialog } from './components/dialog/dialog.js';
import { MediaSectioninput } from './components/dialog/input/media-input.js';
import { TextSectioninput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

class App {
    private readonly page: Component & Composable;
    
    //.document를 전달받음
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) { //appRoot는 HTMLElement타입이다
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        // const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');;
        // //image.attachTo(appRoot, 'beforeend');
        // this.page.addChild(image);

        // const note = new NoteComponent('Note Title', 'Note Body');
        // //note.attachTo(appRoot, 'beforeend');
        // this.page.addChild(note);

        // const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/_NzL5UGgN2Y');
        // //video.attachTo(appRoot, 'beforeend');
        // this.page.addChild(video);

        // const todo = new TodoComponent('Todo Title', 'Todo Item');
        // //todo.attachTo(appRoot, 'beforeend');
        // this.page.addChild(todo);

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectioninput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(()=> {
                const image = new ImageComponent(inputSection.title, inputSection.url);
                this.page.addChild(image);                
                dialog.removeFrom(dialogRoot);
            });            
        });

        const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
        videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectioninput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(()=> {
                const video = new VideoComponent(inputSection.title, inputSection.url);
                this.page.addChild(video);                
                dialog.removeFrom(dialogRoot);
            });            
        });

        const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
        noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectioninput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(()=> {
                const note = new NoteComponent(inputSection.title, inputSection.body);
                this.page.addChild(note);                
                dialog.removeFrom(dialogRoot);
            });            
        });

        const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
        todoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectioninput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(()=> {
                const todo = new TodoComponent(inputSection.title, inputSection.body);
                this.page.addChild(todo);                
                dialog.removeFrom(dialogRoot);
            });            
        });
    }
}

//html에서 .document가 확실하게 있다고 알려주기 
new App(document.querySelector('.document')! as HTMLElement, document.body);