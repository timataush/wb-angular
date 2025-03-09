import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  show() {
    this.isLoading.next(true);
  }

  hide() {
    setTimeout(() => {
      this.isLoading.next(false);
    }, 1500);
  }
}
