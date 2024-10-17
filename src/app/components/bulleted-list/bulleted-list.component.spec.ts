import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletedListComponent } from './bulleted-list.component';

describe('BulletedListComponent', () => {
  let component: BulletedListComponent;
  let fixture: ComponentFixture<BulletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulletedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
