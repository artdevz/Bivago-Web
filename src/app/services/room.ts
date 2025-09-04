import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Room {
  id: string;
  country: string;
  division: string;
  city: string;
  score: number;
  price: number;
  capacity: number;
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = "http://localhost:8080/rooms"

  constructor(private http: HttpClient) {}

  getRooms(filters?: { country?: string, city?: string, maxPrice?: number, maxCapacity?: number}): Observable<Room[]> {
    let params = new URLSearchParams();

    if (filters?.country != null) params.set("country", filters.country.toString());
    if (filters?.city != null) params.set("city", filters.city.toString());
    if (filters?.maxPrice != null) params.set("maxPrice", filters.maxPrice.toString());
    if (filters?.maxCapacity != null) params.set("maxCapacity", filters.maxCapacity.toString());

    const url = `${this.apiUrl}?${params.toString()}`;
    return this.http.get<Room[]>(url);
  }
}
