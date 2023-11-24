import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoMaisComponent } from './botao-mais.component';

describe('BotaoMaisComponent', () => {
  let component: BotaoMaisComponent;
  let fixture: ComponentFixture<BotaoMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
