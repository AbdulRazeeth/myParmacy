import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickResultComponent } from './click-result.component';

describe('ClickResultComponent', () => {
  let component: ClickResultComponent;
  let fixture: ComponentFixture<ClickResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
