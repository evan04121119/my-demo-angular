import { Component, Input, OnInit } from '@angular/core';
import { PostType } from '../models/post-type.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  @Input() postItemList: PostType[] = [];

  constructor() {}

  ngOnInit(): void {}
}
