# GameVault

Dependences:

- Spring Wb;
- Spring Data MongoDB;
- Validation;
- Lombok.

Configurations:

- **Project**: Maven;
- **Language**: Java;
- **Spring Boot**: 3.5.x;
- **Java**: 21;
- **Group**: br.com.gamevault;
- **Artifact**: backend.

---

```bash
Routing? Yes
Stylesheet? SCSS
```

---

```dockerfile
services:

  mongodb:
    image: mongo:8
    container_name: gamevault-mongo

    ports:
      - "27017:27017"

    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: admin

    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

```yml
spring:
  data:
    mongodb:
      uri: mongodb://admin:admin@localhost:27017/gamevault?authSource=admin
```
