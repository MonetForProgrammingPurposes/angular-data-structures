import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanListComponent } from './boolean-list.component';

describe('BooleanListComponent', () => {
  let component: BooleanListComponent;
  let fixture: ComponentFixture<BooleanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooleanListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooleanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
