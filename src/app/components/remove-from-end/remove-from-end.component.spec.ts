import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromEndComponent } from './remove-from-end.component';

describe('RemoveFromEndComponent', () => {
  let component: RemoveFromEndComponent;
  let fixture: ComponentFixture<RemoveFromEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveFromEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveFromEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
