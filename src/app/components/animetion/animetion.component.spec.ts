import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimetionComponent } from './animetion.component';

describe('AnimetionComponent', () => {
  let component: AnimetionComponent;
  let fixture: ComponentFixture<AnimetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimetionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
