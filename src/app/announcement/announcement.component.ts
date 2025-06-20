import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../models/announcement.model';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})




export class AnnouncementComponent {
  announcements: Announcement[] = [];


  constructor(private announcementService: AnnouncementService) {
    this.announcements = this.announcementService.getAnnouncements();
  }
  getAnnouncements(): Announcement[] {
  return this.announcements; 
}

}
