## Technical Documentation: GameVault

**GameVault** is a full-stack application for managing and cataloging electronic games. The application is divided into a REST API developed in **Java** with **Spring Boot** on the backend and a reactive SPA interface in **Angular** (TypeScript and SCSS) on the frontend.

---

## Overview and Features

**GameVault** allows users to manage their game catalog, registering new entries, viewing the list of registered games and tracking details about each title.

### Key Features:

* **RESTful API:** Standardized endpoints for creating and listing games.
* **Cross-Origin Communication:** CORS support explicitly configured in Spring Boot.
* **Componentized Frontend:** Interface built with Angular Standalone Components for maximum performance and modularity.
* **Dependency Injection:** Use of Spring IoC and Angular `inject()` / RxJS patterns.

---

## Technology Stack

### Backend

| Category | Technology | Description |
| ----- | ----- | ----- |
| **Language** | Java 17+ | Base language for backend development. |
| **Framework** | SpringBoot | Main framework for creating the REST application. |
| **Data Access** | Spring Data JPA / Hibernate | Abstraction for data persistence and O/R mapping. |
| **Build Tool** | Maven (`mvnw`) | Dependency manager and build automation. |

### Frontend

| Category | Technology | Description |
| ----- | ----- | ----- |
| **Framework** | Angular | SPA framework based on TypeScript. |
| **Language** | TypeScript | End-to-end static typing. |
| **Styling** | SCSS | Modular styling per component. |
| **Package Manager** | npm | Node.js dependency manager. |

---

## Backend Modules (Spring Boot)

### Models and DTOs

* **`Game.java`:** JPA entity representing the games table in the database.
* **`GameRequestDTO.java`:** Data transfer object (DTO) used to receive and validate JSON payload sent by the frontend when registering a game.

### Services and Repository Layer

* **`GameRepository.java`:** Interface that extends `JpaRepository<Game, Long>`, providing ready-made CRUD operations.
* **`GameService.java`:** Contains the application's business rules, such as validation before saving and conversion of DTOs to Entities.

### Rest Controller & Cors

* **`GameController.java`:** Exposes REST endpoints for game manipulation (`GET /games`, `POST /games`, etc.).
* **`CorsConfig.java`:** Releases HTTP requests originating from the Angular development server (usually `http://localhost:4200`).

---

## Frontend Modules (Angular)

### Interfaces & Models

* **`game.interface.ts`:** Defines the TypeScript type contract to ensure that data received from the API follows the correct structure:

```typescript
export interface Game {
  id?: number;
  title: string;
  genre: string;
  platform: string;
  releaseYear?: number;
}
```

### HTTP Services and Integration

* **`game.service.ts`:** Uses Angular's `HttpClient` to interact with Spring Boot's REST endpoints.

### Components & UI

* **`GamesComponent`:** Main page for listing and registering new games in the system, reactively integrated with `GameService`.

---

## Configuration and Installation

### Running the Backend

1. **Access the backend folder:**
   ```bash
   cd GameVault-main/backend
   ```

2. **Run the server via Maven Wrapper:**

     ```cmd
     mvnw.cmd spring-boot:run
     ```
     
   The backend will be running by default on port `8080`.

---

### Running the Frontend

1. **Access the frontend folder:**
   
   ```bash
   cd GameVault-main/frontend
   ```

3. **Install dependencies:**
   
   ```bash
   npm install
   ```

5. **Start the development server:**
   
   ```bash
   npm start
   ```
   
   Access the application in the browser at `http://localhost:4200`.
