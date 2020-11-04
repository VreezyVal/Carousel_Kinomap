import { HttpClient } from '@angular/common/http';
 import { Component, OnInit } from '@angular/core';
 

export class Logo {
  constructor(
      public name: string,
      public image: string,
      weight : number
  ) {

  }
      
  }
@Component({
 selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  logos : Logo[];
constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getLogos();
  }
  getLogos(){
    this.httpClient.get<any>('https://cors-anywhere.herokuapp.com/http://62.210.247.201:9000/test' ).subscribe(
      response => {
        this.logos = response;
        console.log(response);
      }
     
    );
  }
}
