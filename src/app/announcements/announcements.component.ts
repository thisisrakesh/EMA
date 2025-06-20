import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../models/announcement.model';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent {
  announcements: Announcement[] = [];
  today = new Date();

  constructor(private announcementService: AnnouncementService) {
    const allAnnouncements = this.announcementService.getAnnouncements();
    this.announcements = allAnnouncements.filter(a => a.date >= this.startOfDay(this.today));
  }

  private startOfDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}
