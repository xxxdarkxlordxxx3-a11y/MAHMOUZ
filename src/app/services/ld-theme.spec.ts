import { TestBed } from '@angular/core/testing';
import { LdTheme } from './ld-theme';

describe('LdTheme', () => {
    let service: LdTheme;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LdTheme);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
