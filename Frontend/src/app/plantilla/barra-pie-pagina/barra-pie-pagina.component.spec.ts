import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPiePaginaComponent } from './barra-pie-pagina.component';

describe('BarraPiePaginaComponent', () => {
  let component: BarraPiePaginaComponent;
  let fixture: ComponentFixture<BarraPiePaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraPiePaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraPiePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
