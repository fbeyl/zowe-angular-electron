import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../core/services/profiles/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss', '../home.component.scss']
})
export class ProfilesComponent implements OnInit {

  constructor(private ps: ProfileService) { }

  ngOnInit() {


  }

}
