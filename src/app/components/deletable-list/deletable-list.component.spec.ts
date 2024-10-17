import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletableListComponent } from './deletable-list.component';

describe('DeletableListComponent', () => {
  let component: DeletableListComponent;
  let fixture: ComponentFixture<DeletableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletableListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
