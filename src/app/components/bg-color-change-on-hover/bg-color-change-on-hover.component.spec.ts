import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgColorChangeOnHoverComponent } from './bg-color-change-on-hover.component';

describe('BgColorChangeOnHoverComponent', () => {
  let component: BgColorChangeOnHoverComponent;
  let fixture: ComponentFixture<BgColorChangeOnHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgColorChangeOnHoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgColorChangeOnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
