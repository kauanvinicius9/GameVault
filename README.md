## Technical Documentation: GameVault

**GameVault** is a full-stack application for managing and cataloging electronic games. The application is divided into a REST API developed in **Java** with **Spring Boot** on the backend and a reactive SPA interface in **Angular** (TypeScript and SCSS) on the frontend.

---

## Summary

* [1. Overview and Features](#1-overview-and-features)
* [2. Technology Stack](#2-technology-stack)
* [3. System Architecture](#3-system-architecture)
* [4. Directory Structure](#4-directory-structure)
* [5. Backend Modules (Spring Boot)](#5-módulos-do-backend-spring-boot)
  * [5.1 Models and DTOs](#51-models-and-dtos)
  * [5.2 Services and Repository Layer](#52-services-and-repository-layer)
  * [5.3 Rest Controller & Cors](#53-rest-controller--cors)
* [6. Frontend Modules (Angular)](#6-angular-frontend-modules)
  * [6.1 Interfaces & Models](#61-interfaces--models)
  * [6.2 HTTP Services and Integration](#62-services-and-http-integration)
  * [6.3 Components & UI](#63-componentes--ui)
* [7. Configuration and Installation](#7-configuration-and-installation)
  * [7.1 Running the Backend](#71-running-the-backend)
  * [7.2 Running the Frontend](#72-running-the-frontend)

---

## 1. Overview and Features

**GameVault** allows users to manage their game catalog, registering new entries, viewing the list of registered games and tracking details about each title.

### Key Features:

* **RESTful API:** Standardized endpoints for creating and listing games.
* **Cross-Origin Communication:** CORS support explicitly configured in Spring Boot.
* **Componentized Frontend:** Interface built with Angular Standalone Components for maximum performance and modularity.
* **Dependency Injection:** Use of Spring IoC and Angular `inject()` / RxJS patterns.

---

## 2. Technology Stack

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

## 3. System Architecture

The application adopts a decoupled client-server architecture:

```text
┌──────────────────────────── ────────────────────────────┐
│ FRONTEND (Angular) │
│ Components (UI/SCSS) ◄──► GameService (HttpClient)│
└───────────────────────────┬ ────────────────────────────┘
                                              HTTP/JSON
                                                       ▼
┌──────────────────────────── ────────────────────────────┐
│ BACKEND (Spring Boot) │
│ GameController ──► GameService ──► GameRepository │
└──────────────────────────── ────────────────────────────┘
```

---

## 4. Directory Structure

```text
GameVault-main/
├── README.md
├── backend/
│ ├── .mvn/
│ │ └── wrapper/ # Maven wrapper to run without local installation
│ ├── mvnw / mvnw.cmd # Maven execution scripts
│ ├── pom.xml # Spring Boot Maven Dependencies
│ └── src/
│ ├── main/
│ │ ├── java/br/com/gamevault/
│ │ │ ├── back_end/
│ │ │ │ └── BackEndApplication.java # Spring Boot main class
│ │ │ ├── config/
│ │ │ │ └── CorsConfig.java # Global CORS configuration
│ │ │ ├── controller/
│ │ │ │ └── GameController.java # REST Controller (`/games`)
│ │ │ ├── dto/
│ │ │ │ └── GameRequestDTO.java # Data entry DTO
│ │ │ ├── model/
│ │ │ │ └── Game.java # JPA Entity
│ │ │ ├── repository/
│ │ │ │ └── GameRepository.java # Spring Data JPA Interface
│ │ │ └── services/
│ │ │ └── GameService.java # Backend business logic
│ │ └── resources/
│ │ ├── application.properties # General configuration
│ │ ├── application.yml # Structured configuration
│ │ └── application-dev.yml # Development profile
│ └── test/ # Java test suite
└── frontend/
    ├── angular.json # Angular CLI Configuration
    ├── package.json # Node.js Dependencies
    ├── tsconfig.json # TypeScript configuration
    └── src/
        ├── index.html # root HTML
        ├── main.ts # Application entry point
        ├── styles.scss # Global styles
        └── app/
            ├── app.config.ts # Global Providers (HTTP Client, Routes)
            ├── app.routes.ts # Angular route mapping
            ├── app.ts / app.html# Root component
            ├── pages/
            │ └── games/
            │ ├── games.component.html # List/registration template
            │ ├── games.component.scss # Games page styles
            │ └── games.component.ts # Games component logic
            ├── core/
            │ └── services/
            │ └── game.service.ts # HTTP communication service
            └── shared/
                └── interfaces/
                    └── game.interface.ts # TypeScript game interface
```

---

## 5. Backend Modules (Spring Boot)

### 5.1 Models and DTOs

* **`Game.java`:** JPA entity representing the games table in the database.
* **`GameRequestDTO.java`:** Data transfer object (DTO) used to receive and validate JSON payload sent by the frontend when registering a game.

### 5.2 Services and Repository Layer

* **`GameRepository.java`:** Interface that extends `JpaRepository<Game, Long>`, providing ready-made CRUD operations.
* **`GameService.java`:** Contains the application's business rules, such as validation before saving and conversion of DTOs to Entities.

### 5.3 Rest Controller & Cors

* **`GameController.java`:** Exposes REST endpoints for game manipulation (`GET /games`, `POST /games`, etc.).
* **`CorsConfig.java`:** Releases HTTP requests originating from the Angular development server (usually `http://localhost:4200`).

---

## 6. Frontend Modules (Angular)

### 6.1 Interfaces & Models

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

### 6.2 HTTP Services and Integration

* **`game.service.ts`:** Uses Angular's `HttpClient` to interact with Spring Boot's REST endpoints.

### 6.3 Components & UI

* **`GamesComponent`:** Main page for listing and registering new games in the system, reactively integrated with `GameService`.

---

## 7. Configuration and Installation

### 7.1 Running the Backend

1. **Access the backend folder:**
   ```bash
   cd GameVault-main/backend
   ```

2. **Run the server via Maven Wrapper:**

   * **Linux/macOS:**
     ```bash
     ./mvnw spring-boot:run
     ```

   * **Windows:**
     ```cmd
     mvnw.cmd spring-boot:run
     ```
     
   The backend will be running by default on port `8080`.

---

### 7.2 Running the Frontend

1. **Access the frontend folder:**
   ```bash
   cd GameVault-main/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   Access the application in the browser at `http://localhost:4200`.
