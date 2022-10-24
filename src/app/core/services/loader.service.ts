import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoaderState } from '../models/loader-state';

@Injectable({ providedIn: 'root' })
export class LoaderService {

  private loaderSubject: Subject<LoaderState>;

  public loaderState: Observable<LoaderState>;

  constructor() {
    this.loaderSubject = new Subject<LoaderState>();
    this.loaderState = this.loaderSubject.asObservable()
  }

  public show(): void {
    this.loaderSubject.next({ show: true });
  }

  public hide(): void {
    this.loaderSubject.next({ show: false });
  }
}
