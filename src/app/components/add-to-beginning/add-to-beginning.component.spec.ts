import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToBeginningComponent } from './add-to-beginning.component';

describe('AddToBeginningComponent', () => {
  let component: AddToBeginningComponent;
  let fixture: ComponentFixture<AddToBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToBeginningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
