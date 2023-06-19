import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaModaleComponent } from './pagina-modale.component';

describe('PaginaModaleComponent', () => {
  let component: PaginaModaleComponent;
  let fixture: ComponentFixture<PaginaModaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaModaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
