import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderState } from '@models/loader-state';
import { LoaderService } from '@services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  public isLoading = false;

  private subscription: Subscription;

  constructor(private loarderService: LoaderService) { }

  public ngOnInit(): void {
    this.subscription = this.loarderService.loaderState.subscribe(this.setLoadingStatus.bind(this));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setLoadingStatus(state: LoaderState): void {
    this.isLoading = !!state.show;
  }

}
