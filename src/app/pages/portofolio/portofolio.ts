import { Component } from '@angular/core';
import { Card } from '../../pieces/card/card';
import { RouterLink } from '@angular/router';

@Component({
    imports: [Card, RouterLink],
    selector: 'app-portofolio',
    styleUrl: './portofolio.css',
    templateUrl: './portofolio.html',
})
export class Portofolio {}
