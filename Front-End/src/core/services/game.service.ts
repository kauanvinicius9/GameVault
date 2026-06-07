import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private readonly api = 'http://localhost:8000/games';

    constructor(
        private http: HttpClient
    ) {}

    getAll() {
        return this.http.get<Game[]>(
            this.api
        );
    }

    create(game: Game) {
        return this.http.post<Game>(
            this.api,
            game
        );
    }
}