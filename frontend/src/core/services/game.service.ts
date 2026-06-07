import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "../../app/shared/interfaces/game.interface";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private readonly api = 'http://localhost:8000/games';

    constructor(
        private http: HttpClient
    ) {}

    getAll() {
        return this.http.get<Game[]>(this.api);
    }

    getById(id: string) {
        return this.http.get<Game>(`${this.api}/${id}`);
    }

    create(game: Game) {
        return this.http.post<Game>(this.api, game);
    }

    update(id: String,game: Game
    ) {
        return this.http.put<Game>(`${this.api}/${id}`,game);
    }

    delete(id: string) {
        return this.http.delete(`${this.api}/${id}`);
    }
}