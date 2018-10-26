import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Specie } from '../../../core/models/specie';

@Component({
  selector: 'app-specie-modal',
  templateUrl: './specie-modal.component.html',
  styleUrls: ['./specie-modal.component.css']
})
export class SpecieModalComponent implements OnInit {

  @ViewChild('specieModal') specieModal;

  specie: Specie;

  constructor(private modalService: NgbModal) {}

  open(specie: Specie) {
    this.specie = specie;
    this.modalService.open(this.specieModal, { size: 'lg' });
  }

  ngOnInit() {
  }

}
