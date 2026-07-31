import { GameService } from '../../../core/services/game.service';
import { Game } from '../../shared/interfaces/game.interface';
import { OnInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games: Game[] = [];
  game: Game = { title: '', genre: '', platform: '', rating: 0 };
  errorMessage = '';

  editingId: string | null = null;
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getAll().subscribe({
      next: (data) => {
        this.games = data;
        this.errorMessage = '';
      },
      error: (error: any) => {
        this.errorMessage = 'Erro ao carregar jogos';
        console.error(error);
      },
    });
  }

  save() {
    if (this.editingId) {
      this.gameService.update(this.editingId, this.game).subscribe({
        next: () => {
          this.resetForm();
        },
        error: (error: any) => {
          this.errorMessage = 'Erro ao atualizar jogo';
          console.error(error);
        },
      });
      return;
    }

    this.gameService.create(this.game).subscribe({
      next: () => {
        this.resetForm();
        this.errorMessage = '';
      },
      error: (error: any) => {
        this.errorMessage = 'Erro ao cadastrar jogo';
        console.error(error);
      },
    });
  }

  edit(game: Game) {
    this.game = { ...game };
    this.editingId = game.id || null;
  }

  remove(id: string) {
    this.gameService.delete(id).subscribe({
      next: () => {
        this.loadGames();
        this.errorMessage = '';
      },
      error: (error: any) => {
        this.errorMessage = 'Erro ao remover jogo';
        console.error(error);
      },
    });
  }

  resetForm() {
    this.game = { title: '', genre: '', platform: '', rating: 0 };
    this.editingId = null;
    this.editingId = null;
    this.loadGames();
  }
}
