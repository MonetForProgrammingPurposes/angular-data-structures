import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedListComponent } from './sorted-list.component';

describe('SortedListComponent', () => {
  let component: SortedListComponent;
  let fixture: ComponentFixture<SortedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
