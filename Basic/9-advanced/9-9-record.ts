type PageInfo = {
    title: string;
};

type Page = 'home' | 'about' | 'contact';

//Record는 Page를 key PageInfo를 value로 묶어준다
const nav: Record<Page, PageInfo> = {
    home: {title: 'Home'},
    about: {title: 'About'},
    contact: {title: 'Contact'},
};