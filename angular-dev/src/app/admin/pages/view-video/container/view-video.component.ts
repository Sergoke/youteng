import { Component, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../core/services/api/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {

  video$: Observable<any>;
  videoId: string;
  video: Object;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) { 
    this.route.params.subscribe(params => {
      this.videoId = params.id;
      this.video$ = this.api.getSubtitles(params.id);
      this.video$.subscribe(
      res => {
        this.video = res;
        console.log(res);
      },
      err => {
        this.router.navigate(['/404']);
      });
    });
  }

  ngOnInit() {
  }

}
