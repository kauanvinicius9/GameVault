import { GameService } from "../../../core/services/game.service";
import { Game } from "../../shared/interfaces/game.interface";
import { OnInit, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-games',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {
    games: Game[] = [];
    game: Game = {
        title: '',
        genre: '',
        platform: '',
        rating: 0
    };

    editingId: string | null = null;
    constructor(
        private gameService: GameService
    ) {}

    ngOnInit() {
        this.loadGames();
    }

    loadGames() {
        this.gameService
            .getAll()
            .subscribe(data => {
                this.games = data;
            });
    }

    save(){
        if (this.editingId) {
            this.gameService
                .update(
                    this.editingId,
                    this.game
                )
                .subscribe(() => {
                    this.resetForm();
                });
            return;
        }

        this.gameService
            .create(this.game)
            .subscribe(() => {
                this.resetForm();
            });
    }

    edit(game: Game) {
        this.game = { ...game };
        this.editingId = game.id || null;
    }

    remove(id: string) {
        this.gameService
            .delete(id)
            .subscribe(() => {
                this.loadGames();
            });
    }

    resetForm() {
        this.game = {
            title: '',
            genre: '',
            platform: '',
            rating: 0
        };

        this.editingId = null;
        this.loadGames();
    }
}