# GameVault

###

**Etapa 1 - Instalações**

Validações de ambiente

```bash
JDK 21
```

```bash
java --version
```

```bash
Apache Maven 3.9
```

```bash
mvn --version
```

```bash
Node 22
```

```bash
node --version
```

```bash
npm --version
```

**Terminal:**

```bash
npm install -g @angular/cli
```

```bash
ng version
```

---

**Etapa 2 - Criação do Back-End**

Access: [https://start.spring.io](https://start.spring.io)

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

Install and Extract:

gamevault/backend

---

**Etapa 3 - Criação Front-End**

```bash
ng new frontend
```

> Questions

```bash
Routing? Yes
Stylesheet? SCSS
```

---

**Etapa 4 - MongoDB + Docker**

```docker
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

```bash
docker compose up -d
```

**Etapa 4 - Connect Spring to Mongo**

application.yml

```yml
spring:
  data:
    mongodb:
      uri: mongodb://admin:admin@localhost:27017/gamevault?authSource=admin
```

---

**Etapa 5 - Run**

Run `Front-End`

```bash
ng serve
```

Run `Back-End`

```bash
.\mvnw.cmd sprint-boot:run
```

<div align="left">
  <img src="https://skillicons.dev/icons?i=mongodb" height="40" alt="mongodb logo" title="MongoDB" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=spring" height="40" alt="spring logo" title="Spring" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=java" height="40" alt="java logo" title="Java" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=ts" height="40" alt="typescript logo" title="TypeScript" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=sass" height="40" alt="sass logo" title="SCSS" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=angular" height="40" alt="angularjs logo" title="Angular" />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=docker" height="40" alt="docker logo" title="Docker" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=powershell" height="40" alt="powershell logo" title="Powershell" />
  <img width="1" />
  <img src="https://skillicons.dev/icons?i=maven" height="40" alt="apachemaven logo" title="Apache Maven" />
</div>



