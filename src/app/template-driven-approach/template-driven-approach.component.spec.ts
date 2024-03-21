import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenApproachComponent } from './template-driven-approach.component';

describe('TemplateDrivenApproachComponent', () => {
  let component: TemplateDrivenApproachComponent;
  let fixture: ComponentFixture<TemplateDrivenApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDrivenApproachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrivenApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
