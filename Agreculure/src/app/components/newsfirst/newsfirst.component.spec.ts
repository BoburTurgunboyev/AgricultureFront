import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfirstComponent } from './newsfirst.component';

describe('NewsfirstComponent', () => {
  let component: NewsfirstComponent;
  let fixture: ComponentFixture<NewsfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsfirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
