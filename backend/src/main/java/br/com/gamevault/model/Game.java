package br.com.gamevault.model;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("games")
@Data
@NoArgsConstructor
public class Game {

    @Id
    private String id;
    private String title;
    private String genre;
    private String platform;
    private String rating;
}