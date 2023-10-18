import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEnterpriseComponent } from './details-enterprise.component';

describe('DetailsEnterpriseComponent', () => {
  let component: DetailsEnterpriseComponent;
  let fixture: ComponentFixture<DetailsEnterpriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEnterpriseComponent]
    });
    fixture = TestBed.createComponent(DetailsEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
