package br.com.gamevault.controller;
import br.com.gamevault.dto.GameRequestDTO;
import br.com.gamevault.model.Game;
import br.com.gamevault.services.GameService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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

    @PutMapping("/{id}")
    public Game update(
        @PathVariable String id,
        @RequestBody GameRequestDTO dto
    ) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(
        @PathVariable String id
    ) {
        service.delete(id);
    }
}