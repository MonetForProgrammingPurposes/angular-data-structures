import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseListComponent } from './reverse-list.component';

describe('ReverseListComponent', () => {
  let component: ReverseListComponent;
  let fixture: ComponentFixture<ReverseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
