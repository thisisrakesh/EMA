import { Injectable } from '@angular/core';
import { Announcement } from '../models/announcement.model';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private announcements: Announcement[] = [
    {
      title: 'Independence Day',
      message: 'Office will be closed on August 15th in celebration of Independence Day.',
      date: new Date('2025-08-15'),
    },
    {
      title: 'Diwali Holiday',
      message: 'Celebrate Diwali with your loved ones! Office closed from Nov 1 to Nov 3.',
      date: new Date('2025-11-01'),
    },
    {
      title: 'Christmas Day',
      message: 'Merry Christmas! Office closed on December 25th.',
      date: new Date('2025-12-25'),
    },
    {
      title: 'Republic Day',
      message: 'Office closed on January 26th to observe Republic Day.',
      date: new Date('2026-01-26'),
    },
  ];

  getAnnouncements(): Announcement[] {
    return this.announcements;
  }
}
