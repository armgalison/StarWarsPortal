import { Component, ViewChild } from '@angular/core';
import { Specie } from '@models/specie';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-specie-modal',
  templateUrl: './specie-modal.component.html',
  styleUrls: ['./specie-modal.component.css']
})
export class SpecieModalComponent {

  @ViewChild('specieModal', { static: true }) public specieModal;
  public specie: Specie;

  constructor(private modalService: NgbModal) {}

  public open(specie: Specie) {
    this.specie = specie;
    this.modalService.open(this.specieModal, { size: 'lg' });
  }
}
