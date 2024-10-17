import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaceItemComponent } from './replace-item.component';

describe('ReplaceItemComponent', () => {
  let component: ReplaceItemComponent;
  let fixture: ComponentFixture<ReplaceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
