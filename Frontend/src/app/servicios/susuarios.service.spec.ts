import { TestBed } from '@angular/core/testing';

import { SusuariosService } from './susuarios.service';

describe('SusuariosService', () => {
  let service: SusuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SusuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
