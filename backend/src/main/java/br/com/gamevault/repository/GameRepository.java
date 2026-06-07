package br.com.gamevault.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import br.com.gamevault.model.Game;

public interface GameRepository
extends MongoRepository<Game, String> {
    
}