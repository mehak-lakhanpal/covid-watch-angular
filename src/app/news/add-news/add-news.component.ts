import { Component, OnInit } from '@angular/core';
import { INews } from '../shared/interfaces/inews';
import { NewsService } from 'src/app/core/services/news.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news: INews;
  newsForm: FormGroup;

  constructor(private newsService: NewsService, private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.newsForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5)]],
      summary: ["", [Validators.required, Validators.minLength(20)]],
      description: ["", [Validators.required,Validators.minLength(30)]]
  });
  }

  save(newNews: INews){
    newNews.date = new Date();
    this.newsService.addNews(newNews).subscribe();
    this.router.navigate(['/news']);
  }

}
