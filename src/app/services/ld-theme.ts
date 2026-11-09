import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LdTheme {
    isDark = signal(false)
}
