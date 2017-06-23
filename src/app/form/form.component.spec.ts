import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { DataService } from '../shared/data.service';
import { Story } from '../shared/story';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [FormsModule],
      providers: [{
        provide: DataService, 
        useValue: {list: new Story("test title", "www.testlink.com"), defaultId: 1000 
      }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', ()=>{
    let form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

  it('should have two form groups', ()=>{
    let formgroups = fixture.debugElement.queryAll(By.css('.form-group'));
    expect(formgroups.length).toEqual(2);
  })

  it('should have a title label', ()=>{
    let titleLabel = fixture.debugElement.query(By.css('#lb-title'));
    expect(titleLabel).toBeTruthy();
    expect(titleLabel.nativeElement.textContent).toEqual('Title');
  })

  it('should have a title input', ()=>{
    let titleInput = fixture.debugElement.query(By.css('#title'));
    expect(titleInput).toBeTruthy();
  })

  it('title input should be connected to variable', ()=>{
    let inputName="my name";
    let titleInput = fixture.debugElement.query(By.css('#title')).nativeElement;
    titleInput.value = inputName;
    titleInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(titleInput.textContent).toEqual(inputName);
  })


});
