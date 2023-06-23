import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicaoComponent } from './definicao.component';

describe('DefinicaoComponent', () => {
  let component: DefinicaoComponent;
  let fixture: ComponentFixture<DefinicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefinicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
