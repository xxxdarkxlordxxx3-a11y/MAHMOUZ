import { Component, inject } from '@angular/core';
import { LdTheme } from '../../services/ld-theme';

@Component({
    imports: [],
    selector: 'app-blog',
    styleUrl: './blog.css',
    templateUrl: './blog.html',
})
export class Blog {
    lightDark = inject(LdTheme)
}
