import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToEndComponent } from './add-to-end.component';

describe('AddToEndComponent', () => {
  let component: AddToEndComponent;
  let fixture: ComponentFixture<AddToEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
