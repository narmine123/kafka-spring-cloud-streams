import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service'; // Assurez-vous d'importer votre AuthService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  photos: string[] = [];

  constructor(private authService: AuthService) { }

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
