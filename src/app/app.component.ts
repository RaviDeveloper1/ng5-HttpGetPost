import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data: any;
  constructor(private http: HttpClient ) {

  }

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(
      (data: any) => {
      console.log('User Login:' + data.login);
      console.log('Bio:' + data.bio);
      console.log('Company:' + data.company);
      },
      err => {
        console.log('Error occured');
      }
    );
  }
}

