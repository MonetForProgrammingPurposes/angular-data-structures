import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizedListComponent } from './categorized-list.component';

describe('CategorizedListComponent', () => {
  let component: CategorizedListComponent;
  let fixture: ComponentFixture<CategorizedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorizedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorizedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
