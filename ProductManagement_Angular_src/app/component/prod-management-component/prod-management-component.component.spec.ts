import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdManagementComponentComponent } from './prod-management-component.component';

describe('ProdManagementComponentComponent', () => {
  let component: ProdManagementComponentComponent;
  let fixture: ComponentFixture<ProdManagementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdManagementComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
