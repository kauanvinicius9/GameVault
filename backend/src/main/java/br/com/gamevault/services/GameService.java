package br.com.gamevault.services;
import br.com.gamevault.dto.GameRequestDTO;
import br.com.gamevault.model.Game;
import br.com.gamevault.repository.GameRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GameService {
    private final GameRepository repository;
    
    public List<Game> findAll() {
        return repository.findAll();
    }

    public Game create(GameRequestDTO dto) {
        Game game = new Game();

        game.setTitle(dto.title());
        game.setGenre(dto.genre());
        game.setPlatform(dto.platform());
        game.setRating(dto.rating());

        return repository.save(game);
    }

    public Game update(String id, GameRequestDTO dto) {
        Game game = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Game não encontrado"));

        game.setTitle(dto.title());
        game.setGenre(dto.genre());
        game.setPlatform(dto.platform());
        game.setRating(dto.rating());

        return repository.save(game);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}