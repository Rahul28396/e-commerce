import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem<T>(key: string): T | undefined {
    const value = localStorage.getItem(key);
    if (typeof value === 'string') {
      return JSON.parse(value)
    }
    return undefined;
  }

  getItemById<T extends { id: number}>(key: string, id: number): T | undefined {
    const items = this.getItem<T[]>(key);
    
    return items?.find(x => x.id === id);
  }

  addItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem<T extends { id: number}>(id: number, key: string){
    let items = this.getItem<T[]>(key);
    if(Array.isArray(items)){
      items = items.filter( item => item.id !== id);
      this.addItem<T[]>(key, items);
    }
  }

  clearStorage(key: string){
    localStorage.removeItem(key);
  }
}
