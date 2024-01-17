import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasbComponent } from './kasb.component';

describe('KasbComponent', () => {
  let component: KasbComponent;
  let fixture: ComponentFixture<KasbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KasbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KasbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
