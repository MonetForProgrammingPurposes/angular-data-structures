import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithTooltipsComponent } from './list-with-tooltips.component';

describe('ListWithTooltipsComponent', () => {
  let component: ListWithTooltipsComponent;
  let fixture: ComponentFixture<ListWithTooltipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWithTooltipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
