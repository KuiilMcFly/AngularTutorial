import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogModalComponent } from './dog-modal.component';

describe('DogModalComponent', () => {
  let component: DogModalComponent;
  let fixture: ComponentFixture<DogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
