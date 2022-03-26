import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  title: string = 'Whatever you want.';
  content: string = 'Some content goes here.';
  isTechRelated: boolean = true;

  onTechRelatedClick() {
    // remember me - this is two way data binding for a boolean
    if (this.isTechRelated === true) {
      this.isTechRelated = !this.isTechRelated;
    } else {
      this.isTechRelated = !this.isTechRelated;
    }
  }
}
