import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewssingleComponent } from './newssingle.component';

describe('NewssingleComponent', () => {
  let component: NewssingleComponent;
  let fixture: ComponentFixture<NewssingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewssingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewssingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
