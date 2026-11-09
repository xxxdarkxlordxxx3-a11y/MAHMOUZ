import { Component, inject } from '@angular/core';
import { LdTheme } from '../../services/ld-theme';

@Component({
    imports: [],
    selector: 'app-home',
    styleUrl: './home.css',
    templateUrl: './home.html',
})
export class Home {
    lightDark = inject(LdTheme);
    bornDate: Date = new Date("1/9/2012");
    now: Date = new Date();
    g: number = +this.now - +this.bornDate;
    age = Math.floor(this.g / 1000 / 60 / 60 / 24 / 365);
}
