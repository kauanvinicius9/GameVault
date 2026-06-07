@Document("games")
@Data
@NoArgsConstructor
public class Game {

    @id
    private String id;
    private String title;
    private String genre;
    private String platform;
    private String rating;
}