import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarThoughtComponent } from './listar-thought.component';

describe('ListarThoughtComponent', () => {
  let component: ListarThoughtComponent;
  let fixture: ComponentFixture<ListarThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarThoughtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
