import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromBeginningComponent } from './remove-from-beginning.component';

describe('RemoveFromBeginningComponent', () => {
  let component: RemoveFromBeginningComponent;
  let fixture: ComponentFixture<RemoveFromBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveFromBeginningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFromBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
