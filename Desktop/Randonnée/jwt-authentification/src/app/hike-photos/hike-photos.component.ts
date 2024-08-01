import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-hike-photos',
  templateUrl: './hike-photos.component.html',
  styleUrls: ['./hike-photos.component.scss']
})
export class HikePhotosComponent implements OnInit {
  photos: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getHikePhotos().subscribe(
      (data) => {
        this.photos = data;
      },
      (error) => {
        console.error('Error fetching hike photos', error);
      }
    );
  }
}
