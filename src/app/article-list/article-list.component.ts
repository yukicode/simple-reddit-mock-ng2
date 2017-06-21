import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Story } from '../shared/story';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private ds: DataService) { }

  stories: Story[];

  ngOnInit() {
    this.stories = this.ds.getStories();
  }

}
