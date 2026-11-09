import { Component, Input } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-card',
    styleUrl: './card.css',
    templateUrl: './card.html',
})
export class Card {
    @Input({required: true}) src: string = ''
    @Input({required: true}) title: string = ''
    @Input({required: true}) desc: string = ''
}
