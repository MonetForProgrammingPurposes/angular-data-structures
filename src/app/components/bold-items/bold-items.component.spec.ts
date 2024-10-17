import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldItemsComponent } from './bold-items.component';

describe('BoldItemsComponent', () => {
  let component: BoldItemsComponent;
  let fixture: ComponentFixture<BoldItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoldItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoldItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
