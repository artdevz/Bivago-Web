import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Room, RoomService } from '../../services/room';
import { NgSelectModule } from '@ng-select/ng-select';
import { COUNTRIES, CountryOption } from '../../shared/CountryOption';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, NgSelectModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  rooms: Room[] = [];
  country?: string;
  countries: CountryOption[] = COUNTRIES;
  city: string | null = null;
  maxPrice: number | null = null;
  maxCapacity: number | null = null;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void { this.getAllRooms(); }

  getAllRooms() {
    this.roomService.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  filterRooms() {
    const filters: { country?: string, city?: string, maxPrice?: number, maxCapacity?: number } = {};

    if (this.country != null) filters.country = this.country;
    if (this.city != null) filters.city = this.city;
    if (this.maxPrice != null) filters.maxPrice = this.maxPrice;
    if (this.maxCapacity != null) filters.maxCapacity = this.maxCapacity;

    this.roomService.getRooms(filters).subscribe(data => {
      this.rooms = data;
    });
  }

}
