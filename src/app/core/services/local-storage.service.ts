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

  addItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem<T extends { id: number}>(cartId: number, key: string){
    let items = this.getItem<T[]>(key);
    if(Array.isArray(items)){
      items = items.filter( item => item.id !== cartId);
      this.addItem<T[]>(key, items);
    }
  }

  clearStorage(key: string){
    localStorage.removeItem(key);
  }
}
