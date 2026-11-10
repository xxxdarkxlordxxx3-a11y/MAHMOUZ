import { App } from './app';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

describe('App', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [App],
            providers: [provideRouter([])]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should render navigation links', () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        // بنختبر إن الـ nav والـ buttons موجودين فعلاً زي ما هم في الـ app.html بتاعك
        expect(compiled.querySelector('nav')).toBeTruthy();
        expect(compiled.querySelector('button')?.textContent).toContain('الرئيسية');
    });
});
