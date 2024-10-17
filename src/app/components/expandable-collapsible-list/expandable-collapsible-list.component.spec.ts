import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableCollapsibleListComponent } from './expandable-collapsible-list.component';

describe('ExpandableCollapsibleListComponent', () => {
  let component: ExpandableCollapsibleListComponent;
  let fixture: ComponentFixture<ExpandableCollapsibleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandableCollapsibleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableCollapsibleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
