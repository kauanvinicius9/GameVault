@RestController
@RequestMapping("/games")
@RequiredArgsConstructor
public class GameController {
    private final GameService service;

    @GetMapping
    public List<Game> findAll() {
        return service.findAll();
    }

    @PostMapping
    public Game create(
        @RequestBody GameRequestDTO dto
    ) {
        return service.create(dto);
    }
}