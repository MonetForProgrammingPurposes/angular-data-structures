import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMatchingListComponent } from './highlight-matching-list.component';

describe('HighlightMatchingListComponent', () => {
  let component: HighlightMatchingListComponent;
  let fixture: ComponentFixture<HighlightMatchingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightMatchingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightMatchingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
