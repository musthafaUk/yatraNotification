import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private httpClient: HttpClient) { }

  getActionMockResponse() {
    // This is to take mock data form the json file 
    const url = '../assets/mock_data/actions-api-mock.json'
    return this.httpClient.get(url);
  }
}
