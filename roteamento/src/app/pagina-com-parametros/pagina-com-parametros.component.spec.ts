import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComParametrosComponent } from './pagina-com-parametros.component';

describe('PaginaComParametrosComponent', () => {
  let component: PaginaComParametrosComponent;
  let fixture: ComponentFixture<PaginaComParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaComParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaComParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
