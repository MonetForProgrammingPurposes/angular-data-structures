import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueListComponent } from './unique-list.component';

describe('UniqueListComponent', () => {
  let component: UniqueListComponent;
  let fixture: ComponentFixture<UniqueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
