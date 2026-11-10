import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Portofolio } from './portofolio';
import { provideRouter } from '@angular/router';

describe('Portofolio', () => {
    let component: Portofolio;
    let fixture: ComponentFixture<Portofolio>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Portofolio],
            providers: [provideRouter([])]
        }).compileComponents();

        fixture = TestBed.createComponent(Portofolio);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
