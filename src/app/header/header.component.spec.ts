import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have a nav component', () =>{
    fixture.detectChanges();
    let nav = fixture.debugElement.query(By.css('nav'));
    expect(nav).toBeTruthy();
  });

  it('should have a navbar-header', ()=>{
    fixture.detectChanges();
    let navheader = fixture.debugElement.query(By.css('.navbar-header'));
    expect(navheader).toBeTruthy();
  })

  it('should have a navbar-band', ()=>{
    fixture.detectChanges();
    let navbrand = fixture.debugElement.query(By.css('.navbar-brand'));
    expect(navbrand).toBeTruthy();
  })

   it('should have an anchor', ()=>{
    fixture.detectChanges();
    let anchor = fixture.debugElement.query(By.css('a'));
    expect(anchor).toBeTruthy();
  })

  it('should have the title simple reddit', ()=>{
    fixture.detectChanges();
    let anchor = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(anchor.textContent).toEqual("Simple Reddit");
  })
});
