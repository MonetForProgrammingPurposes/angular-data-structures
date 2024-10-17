import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedSortedListComponent } from './grouped-sorted-list.component';

describe('GroupedSortedListComponent', () => {
  let component: GroupedSortedListComponent;
  let fixture: ComponentFixture<GroupedSortedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedSortedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupedSortedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
