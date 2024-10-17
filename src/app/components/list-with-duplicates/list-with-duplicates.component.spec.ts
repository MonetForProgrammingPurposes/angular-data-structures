import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithDuplicatesComponent } from './list-with-duplicates.component';

describe('ListWithDuplicatesComponent', () => {
  let component: ListWithDuplicatesComponent;
  let fixture: ComponentFixture<ListWithDuplicatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithDuplicatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithDuplicatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
