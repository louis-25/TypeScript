import { Component } from './components/component.js';
import { InputDialog, MediaData, TextData } from './components/dialog/dialog.js';
import { MediaSectioninput } from './components/dialog/input/media-input.js';
import { TextSectioninput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';


type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
    new (): T;
}
class App {
    private readonly page: Component & Composable;
    
    //.document를 전달받음
    constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) { //appRoot는 HTMLElement타입이다
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        this.bindElementToDialog<MediaSectioninput>(
            '#new-image', 
            MediaSectioninput, 
            (input: MediaSectioninput) => new ImageComponent(input.title, input.url)
        );
        
        this.bindElementToDialog<MediaSectioninput>(
            '#new-video', 
            MediaSectioninput, 
            (input: MediaSectioninput) => new VideoComponent(input.title, input.url)
        );

        this.bindElementToDialog<TextSectioninput>(
            '#new-note', 
            TextSectioninput, 
            (input: TextSectioninput) => new NoteComponent(input.title, input.body)
        );

        this.bindElementToDialog<TextSectioninput>(
            '#new-todo', 
            TextSectioninput,
            (input: TextSectioninput) => new TodoComponent(input.title, input.body)
        );
    }
    
    private bindElementToDialog<T extends (MediaData | TextData) & Component>(
        selector: string, 
        InputComponent: InputComponentConstructor<T>,
        makeSection: (input: T) => Component
        ) {
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);

            dialog.setOnCloseListener(()=> {
                dialog.removeFrom(this.dialogRoot);
            });
            dialog.setOnSubmitListener(()=> {
                const image = makeSection(input);
                this.page.addChild(image);                
                dialog.removeFrom(this.dialogRoot);
            });            
        });
    }
}

//html에서 .document가 확실하게 있다고 알려주기 
new App(document.querySelector('.document')! as HTMLElement, document.body);