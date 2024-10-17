import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaseItalicListComponent } from './uppercase-italic-list.component';

describe('UppercaseItalicListComponent', () => {
  let component: UppercaseItalicListComponent;
  let fixture: ComponentFixture<UppercaseItalicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UppercaseItalicListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppercaseItalicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
