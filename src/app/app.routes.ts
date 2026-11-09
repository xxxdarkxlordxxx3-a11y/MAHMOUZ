import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Portofolio } from './pages/portofolio/portofolio';
import { Blog } from './pages/blog/blog';
import { Easteregg } from './pages/easteregg/easteregg';

export const routes: Routes = [{
    path: "",
    component: Home
},
{
    path: "portofolio",
    component: Portofolio
},
{
    path: "blog",
    component: Blog
},
{
    path: "easteregg",
    component: Easteregg
}
];
