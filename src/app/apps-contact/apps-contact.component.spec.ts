import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsContactComponent } from './apps-contact.component';

describe('AppsContactComponent', () => {
  let component: AppsContactComponent;
  let fixture: ComponentFixture<AppsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
