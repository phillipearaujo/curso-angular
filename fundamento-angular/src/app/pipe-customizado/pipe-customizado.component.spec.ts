import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomizadoComponent } from './pipe-customizado.component';

describe('PipeCustomizadoComponent', () => {
  let component: PipeCustomizadoComponent;
  let fixture: ComponentFixture<PipeCustomizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeCustomizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCustomizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
