import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomActionModalComponent } from './custom-action-modal.component';

describe('CustomActionModalComponent', () => {
  let component: CustomActionModalComponent;
  let fixture: ComponentFixture<CustomActionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomActionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomActionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
