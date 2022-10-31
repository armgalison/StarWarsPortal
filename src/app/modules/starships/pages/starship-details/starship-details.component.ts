import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship } from '@models/starship';
import { LoaderService } from '@services/loader.service';
import { StarshipService } from '@services/starship.service';
import { ToastService } from '@services/toast.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  public id: string;
  public starship: Starship;

  constructor(
    private activatedRoute: ActivatedRoute,
    private starshipService: StarshipService,
    private loaderService: LoaderService,
    private toastService: ToastService
  ) { }

  public ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadStarship();
  }

  public getPilotIdFromUrl(url: string): string {
    return url.split('/')[5];
  }

  private loadStarship(): void {
    this.loaderService.show();
    this.starshipService.getStarshipWithPilotsById(this.id).subscribe({
      next: (starship) => {
        this.starship = starship;
        this.loaderService.hide();
      },
      error: (error) => {
        console.error(error);
        this.toastService.danger(`Unable to load starship, please try again.`);
        this.loaderService.hide()
      }
    });
  }
}
