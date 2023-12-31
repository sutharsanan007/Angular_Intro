import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDirectivesComponent } from './angular-directives.component';

describe('AngularDirectivesComponent', () => {
  let component: AngularDirectivesComponent;
  let fixture: ComponentFixture<AngularDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularDirectivesComponent]
    });
    fixture = TestBed.createComponent(AngularDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
