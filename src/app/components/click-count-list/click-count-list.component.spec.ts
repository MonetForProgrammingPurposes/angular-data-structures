import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCountListComponent } from './click-count-list.component';

describe('ClickCountListComponent', () => {
  let component: ClickCountListComponent;
  let fixture: ComponentFixture<ClickCountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickCountListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickCountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
