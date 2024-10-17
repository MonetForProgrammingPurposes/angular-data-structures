import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCodedListComponent } from './color-coded-list.component';

describe('ColorCodedListComponent', () => {
  let component: ColorCodedListComponent;
  let fixture: ComponentFixture<ColorCodedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorCodedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCodedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
