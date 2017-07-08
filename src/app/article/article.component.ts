import { Component, Input } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Story } from '../shared/story';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() story: Story;

  constructor(private ds: DataService) { }

  upVote(){
    this.ds.upVote(this.story.id);
  }

  downVote(){
    this.ds.downVote(this.story.id);
  }
}
