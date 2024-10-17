import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikeThroughListComponent } from './strike-through-list.component';

describe('StrikeThroughListComponent', () => {
  let component: StrikeThroughListComponent;
  let fixture: ComponentFixture<StrikeThroughListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrikeThroughListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrikeThroughListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
