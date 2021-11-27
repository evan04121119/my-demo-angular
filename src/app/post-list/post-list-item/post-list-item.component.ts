import { Component, Input, OnInit } from '@angular/core';
import { PostType } from 'src/app/models/post-type.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  @Input() postItem: PostType = new PostType();
  myClassObject = {};
  constructor() {}

  ngOnInit(): void {
    this.myClassObject = {
      'list-group-item': true,
      'list-group-item-success': this.postItem.loveIts > 0,
      'list-group-item-danger': this.postItem.loveIts < 0,
    };
  }

  onLike(): void {
    this.postItem.loveIts++;
    console.log(`onlike ${this.postItem.loveIts}`);
  }
  onDislike(): void {
    this.postItem.loveIts--;
    console.log(`onDislike ${this.postItem.loveIts}`);
  }
}
