import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreListComponent } from './load-more-list.component';

describe('LoadMoreListComponent', () => {
  let component: LoadMoreListComponent;
  let fixture: ComponentFixture<LoadMoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadMoreListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadMoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
