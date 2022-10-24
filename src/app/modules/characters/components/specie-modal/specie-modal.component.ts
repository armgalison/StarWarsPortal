import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Specie } from 'src/app/core/models/specie';

@Component({
  selector: 'app-specie-modal',
  templateUrl: './specie-modal.component.html',
  styleUrls: ['./specie-modal.component.css']
})
export class SpecieModalComponent {

  @ViewChild('specieModal') public specieModal;
  public specie: Specie;

  constructor(private modalService: NgbModal) {}

  public open(specie: Specie) {
    this.specie = specie;
    this.modalService.open(this.specieModal, { size: 'lg' });
  }
}
