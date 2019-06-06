import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Video} from '../../models/video';
import {DomSanitizer} from '@angular/platform-browser';
import {AppConfigService} from '../../services/config/app-config.service';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.css']
})
export class VideoDialogComponent implements OnInit {

  videoUrl:string;

  constructor(public dialogRef: MatDialogRef<VideoDialogComponent>,
              public sanitizer: DomSanitizer,
              @Inject(MAT_DIALOG_DATA) public video: Video,
              private appConfigService: AppConfigService) {

    this.videoUrl = appConfigService.config.youtube.url + video.key;
  }

  ngOnInit() {
  }

}
