import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdateListComponent } from './live-update-list.component';

describe('LiveUpdateListComponent', () => {
  let component: LiveUpdateListComponent;
  let fixture: ComponentFixture<LiveUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveUpdateListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
