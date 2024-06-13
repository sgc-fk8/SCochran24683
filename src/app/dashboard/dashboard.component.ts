import { Component, OnInit } from '@angular/core';
import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  linesOfBusiness: LineOfBusiness[] = [];
  lineOfBusinessCounts: { name: string, count: number }[] = [];
  
  constructor(private lineOfBusinessService: LineOfBusinessService,
  private inMemoryDataService: InMemoryDataService) { }
  
  ngOnInit() {
    this.getLinesOfBusiness();
     this.getLineOfBusinessCounts();
  }

  getLinesOfBusiness(): void {
    this.lineOfBusinessService.getLinesOfBusiness()
      .subscribe(linesOfBusiness => this.linesOfBusiness = linesOfBusiness.slice(1, 4));
  }

  getLineOfBusinessCounts(): void {
    this.lineOfBusinessCounts = this.inMemoryDataService.getLineOfBusinessCount();
 }
}
