import { TestBed } from '@angular/core/testing';

import { DicionarioAbertoService } from './dicionario-aberto.service';

describe('DicionarioAbertoService', () => {
  let service: DicionarioAbertoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DicionarioAbertoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
