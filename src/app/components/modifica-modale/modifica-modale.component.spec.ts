import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaModaleComponent } from './modifica-modale.component';

describe('ModificaModaleComponent', () => {
  let component: ModificaModaleComponent;
  let fixture: ComponentFixture<ModificaModaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaModaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
