import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercaseStringlistComponent } from './lowercase-stringlist.component';

describe('LowercaseStringlistComponent', () => {
  let component: LowercaseStringlistComponent;
  let fixture: ComponentFixture<LowercaseStringlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowercaseStringlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowercaseStringlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
