import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPipesComponent } from './angular-pipes.component';

describe('AngularPipesComponent', () => {
  let component: AngularPipesComponent;
  let fixture: ComponentFixture<AngularPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularPipesComponent]
    });
    fixture = TestBed.createComponent(AngularPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
