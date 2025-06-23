import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { WorkExperience } from './work-experience/work-experience';

export const routes: Routes = [ 

    {
        path: 'home',
        component: Home,
        title: 'Pablo Sepúlveda Llorente - Home'
    },
    {
        path: 'portfolio',
        component: Portfolio,
        title: 'Portfolio'
    },
    {
        path: 'work-experience',
        component: WorkExperience,
        title: 'Work Experience'
    },
    {
        path: 'contact',
        component: Contact,
        title: 'Contact'
    },
    {
        path: '**',
        component: Home
    }
];
