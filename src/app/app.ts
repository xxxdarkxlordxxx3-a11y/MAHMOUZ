import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LdTheme } from './services/ld-theme';

@Component({
    imports: [RouterOutlet, RouterLink],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {
    lightDark = inject(LdTheme)
    button() {
        this.lightDark.isDark.update(e => !e)
    }
}
