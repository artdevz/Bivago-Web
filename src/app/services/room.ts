import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Room {
  id: string;
  price: number;
  capacity: number;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = "http://localhost:8080/room"

  constructor(private http: HttpClient) {}

  getRooms(filters?: { maxPrice?: number, maxCapacity?: number}): Observable<Room[]> {
    let params = new URLSearchParams();

    if (filters?.maxPrice != null) params.set("maxPrice", filters.maxPrice.toString());
    if (filters?.maxCapacity != null) params.set("maxCapacity", filters.maxCapacity.toString());

    const url = `${this.apiUrl}?${params.toString()}`;
    return this.http.get<Room[]>(url);
  }
}
