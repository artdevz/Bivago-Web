import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Room, RoomService } from '../../services/room';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  rooms: Room[] = [];
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
    const filters: { maxPrice?: number, maxCapacity?: number } = {};

    if (this.maxPrice != null) filters.maxPrice = this.maxPrice;
    if (this.maxCapacity != null) filters.maxCapacity = this.maxCapacity;

    this.roomService.getRooms(filters).subscribe(data => {
      this.rooms = data;
    });
  }

}
