import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminclientesComponent } from './adminclientes.component';

describe('AdminclientesComponent', () => {
  let component: AdminclientesComponent;
  let fixture: ComponentFixture<AdminclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
