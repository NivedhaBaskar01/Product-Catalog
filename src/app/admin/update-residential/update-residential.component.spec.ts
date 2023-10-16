import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResidentialComponent } from './update-residential.component';

describe('UpdateResidentialComponent', () => {
  let component: UpdateResidentialComponent;
  let fixture: ComponentFixture<UpdateResidentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateResidentialComponent]
    });
    fixture = TestBed.createComponent(UpdateResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
