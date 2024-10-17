import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithDatesComponent } from './list-with-dates.component';

describe('ListWithDatesComponent', () => {
  let component: ListWithDatesComponent;
  let fixture: ComponentFixture<ListWithDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithDatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
