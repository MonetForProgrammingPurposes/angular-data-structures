import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalicizedItemsComponent } from './italicized-items.component';

describe('ItalicizedItemsComponent', () => {
  let component: ItalicizedItemsComponent;
  let fixture: ComponentFixture<ItalicizedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItalicizedItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItalicizedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
