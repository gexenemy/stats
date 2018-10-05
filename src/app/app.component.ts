import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  returnData: any = [];
  leagueNames: Array<string> = [];
  leagueName: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.opendota.com/api/leagues?api_key=5314a5f5-e926-4eae-8fe4-fb1f9cbbd20c').subscribe((data) => {
      this.returnData = data;
      this.addLeagueNames(this.returnData);
    });
    const aa: any = this.http.get('https://api.opendota.com/api/scenarios/itemTimings?api_key=5314a5f5-e926-4eae-8fe4-fb1f9cbbd20c');

    forkJoin([aa]).subscribe(results => {
      console.log(results[0]);
    });
  }

  addLeagueNames(data: any) {
    for (let i = 0; i < data.length; i++) {
      this.leagueNames.push(data[i]);
    }
  }

  // getData(): any {
  //   this.http.get('https://api.opendota.com/api/leagues?api_key=5314a5f5-e926-4eae-8fe4-fb1f9cbbd20c').subscribe((data) => {
  //     return data;
  //   });
  // }

}
