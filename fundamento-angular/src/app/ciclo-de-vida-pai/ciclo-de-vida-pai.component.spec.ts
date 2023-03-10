import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai.component';

describe('CicloDeVidaPaiComponent', () => {
  let component: CicloDeVidaPaiComponent;
  let fixture: ComponentFixture<CicloDeVidaPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloDeVidaPaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloDeVidaPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
