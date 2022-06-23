import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-banner',
  templateUrl: './radio-banner.component.html',
  styleUrls: ['./radio-banner.component.scss']
})
export class RadioBannerComponent implements OnInit {

  song = "SongName";
  radio = "RadioName";

  constructor() { }

  ngOnInit(): void {
  }

}
