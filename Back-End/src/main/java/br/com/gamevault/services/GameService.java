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
        game.setRating(dto.setRating());

        return repository.save(game);
    }
}