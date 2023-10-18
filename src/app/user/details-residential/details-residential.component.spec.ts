import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsResidentialComponent } from './details-residential.component';

describe('DetailsResidentialComponent', () => {
  let component: DetailsResidentialComponent;
  let fixture: ComponentFixture<DetailsResidentialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsResidentialComponent]
    });
    fixture = TestBed.createComponent(DetailsResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
