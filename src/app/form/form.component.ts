import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  title: string;
  link: string;

  constructor(private ds: DataService) { }

  onSubmit(): void {
    this.ds.addStory(this.title, this.link);
  }

}
