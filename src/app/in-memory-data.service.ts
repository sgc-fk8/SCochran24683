import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LineOfBusiness } from './LineOfBusiness';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const linesOfBusiness = [
      { id: 11, name: 'General Liability', description: 'Liability coverage for businesses.' },
      { id: 12, name: 'Commercial Property', description: 'Property coverage for businesses.' },
      { id: 13, name: 'Inland Marine', description: 'Coverage for tools and machinery on job sites.' },
      { id: 14, name: 'Ocean Marine', description: 'Coverage for dock and boat repair businesses.' },
      { id: 15, name: 'Garage', description: 'Coverage for auto repairs and car sales.' }
    ];


    const recentQuotes = [
      { id: 101, quoteNumber: 'AC123PC', lineOfBusiness: 11 },
      { id: 102, quoteNumber: 'AC124PC', lineOfBusiness: 12 },
      { id: 103, quoteNumber: 'AC125PC', lineOfBusiness: 13 },
      { id: 104, quoteNumber: 'AC126PC', lineOfBusiness: 14 },
      { id: 105, quoteNumber: 'AC127PC', lineOfBusiness: 15 },
      { id: 106, quoteNumber: 'AC125PC', lineOfBusiness: 13 },
      { id: 107, quoteNumber: 'AC126PC', lineOfBusiness: 13 },
      { id: 108, quoteNumber: 'AC127PC', lineOfBusiness: 15 }
    ];

    return {linesOfBusiness, recentQuotes};
  }

 getLineOfBusinessCount(): { name: string, count: number }[] {
    const recentQuotes = this.createDb().recentQuotes;
    const linesOfBusiness = this.createDb().linesOfBusiness;

    const countMap = new Map<number, number>();

    // Counts occurances
    recentQuotes.forEach(quote => {
      if (countMap.has(quote.lineOfBusiness)) {
        countMap.set(quote.lineOfBusiness, countMap.get(quote.lineOfBusiness)! + 1);
      } else {
        countMap.set(quote.lineOfBusiness, 1);
      }
    });

    // Results
    const result = linesOfBusiness.map(line => ({
      name: line.name,
      count: countMap.get(line.id) || 0 // default to 0 if not found
    }));
    result.sort((a, b) => b.count - a.count);
    return result;
  }
  // Overrides the genId method to ensure that a line of business always has an id.
  // If the lines of business array is empty,
  // the method below returns the initial number (11).
  // if the lines of business array is not empty, the method below returns the highest
  // line of business id + 1.
  genId(linesOfBusiness: LineOfBusiness[]): number {
    return linesOfBusiness.length > 0 ? Math.max(...linesOfBusiness.map(lineOfBusiness => lineOfBusiness.id)) + 1 : 11;
  }
}
