import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() story;

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  getDomain() : string{
    let result = '';
    if(this.story && this.story.link){
      try {
        result = this.story.link.split('//');
        result = result.length >1 ? result[1] : result[0];
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
