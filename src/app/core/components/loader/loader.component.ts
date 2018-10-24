import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../../core/services/loader.service';
import { LoaderState } from '../../models/loader-state';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  isLoading = false;

  private subscription: Subscription;

  constructor(
    private loarderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscription = this.loarderService.loaderState
      .subscribe((state: LoaderState) => {
        console.log('LOADER = ', state);
        this.isLoading = state.show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
