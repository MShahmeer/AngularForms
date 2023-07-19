import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorageKey = "expenseform"

  constructor() { }

  setEmployeeData(data: any[]): void{
    localStorage.setItem(this.localStorageKey, JSON.stringify(data))
  }

  getEmployeeData(): any[]{
    return localStorage.getItem(this.localStorageKey)? JSON.parse(localStorage.getItem(this.localStorageKey)) : []
  }

  clearEmployeeData(): void{
    localStorage.removeItem(this.localStorageKey)
  }
}
