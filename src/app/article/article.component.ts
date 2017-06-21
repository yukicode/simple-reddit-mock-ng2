import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Story } from '../shared/story';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() story: Story;

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  getDomain() : string{
    let result = '', splited = [];
    if(this.story && this.story.link){
      try {
        splited = this.story.link.split('//');
        result = splited.length >1 ? splited[1] : splited[0];
        result = result.split('/')[0];
      } catch(err) {
        console.log(err);
      }
      return result;
    }
  }

  upVote(){
    this.ds.upVote(this.story.id);
  }

  downVote(){
    this.ds.downVote(this.story.id);
  }
}
