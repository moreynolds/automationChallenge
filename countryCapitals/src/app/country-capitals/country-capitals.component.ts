import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'country-capitals',
  templateUrl: './country-capitals.component.html',
  styleUrls: ['./country-capitals.component.scss']
})
export class CountryCapitalsComponent implements OnInit {
 
name: string = "";
response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(){
    this.http.get('https://restcountries.eu/rest/v2/name/' + this.name)
    .subscribe((response) =>{
      this.response = response;
      console.log(this.response);
      return this.response;
  
    })
  }

}