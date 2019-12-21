import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../_services/hotels.service'
import { Hotels, Hotel } from '../_models/hotels'

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private hotelService: HotelsService,
    private fb: FormBuilder
  ) { }

  searchForm: FormGroup;
  minDate = new Date();
  lat;
  lng;
  loading;
  hotels$: Hotels;

  ngOnInit() {
    this.searchForm = new FormGroup({
      destination: new FormControl("", Validators.required),
      checkin: new FormControl(""),
      checkout: new FormControl("", Validators.required),
      'guests[]': new FormControl(1, Validators.required),
    })
  }

  setDates($event) {
    this.searchForm.patchValue({
      checkin: "",
      checkout: ""
    })
    this.searchForm.patchValue({
      checkin: moment($event.value[0]).format('YYYY-MM-DD'),
      checkout: moment($event.value[1]).format('YYYY-MM-DD')
    })
  }

  _get = function () {
    this.loading = true;
    this.hotelService.getHotels(this.searchForm.value).subscribe(
      data => {
        this.lat = data.hotels[0].location.latitude;
        this.lng = data.hotels[0].location.longitude;
        this.hotels$ = data.hotels
      },
      err => {

      },
      () => {
        this.loading = false;
      }
    )
  }

}
