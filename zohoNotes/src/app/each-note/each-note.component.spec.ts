import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachNoteComponent } from './each-note.component';

describe('EachNoteComponent', () => {
  let component: EachNoteComponent;
  let fixture: ComponentFixture<EachNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
