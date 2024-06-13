import { Component, OnInit } from '@angular/core';
import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-popular-and-count',
  templateUrl: './popular-and-count.component.html',
  styleUrls: ['./popular-and-count.component.css']
})
export class PopularAndCount implements OnInit {
  lineOfBusinessCounts: { name: string, count: number }[] = [];
  constructor(private inMemoryDataService: InMemoryDataService) { }

  ngOnInit(): void {
    this.getLineOfBusinessCounts();
  }
  getLineOfBusinessCounts(): void {
    this.lineOfBusinessCounts = this.inMemoryDataService.getLineOfBusinessCount();
  }
}
