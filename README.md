# Peps App

Peps est une application destinée à tous ceux qui sont fatigués de se poser toujours la même question : "Qu'est ce qu'on mange ce soir?" 🥪
Avec un catalogue contenant des recettes variées et organisées par régimes alimentaires, pays d'origine ou préférences, Peps vous permettra de sauvegarder des recettes et de générer des menus personnalisables pour la semaine! En plus des recettes disponibles sur l'application, vous pourrez également créer les vôtres et les partager aux autres utilisateurs.

## Prérequis

- Java 21
- Node.js 18+
- Angular CLI (`npm install -g @angular/cli`)
- Maven

## Installation

### Backend / API (Spring Boot)

1. Accédez au dossier du backend :
    ```bash
    cd api
    ```
2. Installez les dépendances et compilez :
    ```bash
    mvn clean install
    ```

### Frontend (Angular 19)

1. Accédez au dossier du frontend :
    ```bash
    cd client
    ```
2. Installez les dépendances :
    ```bash
    npm install
    ```

## Lancement

### Démarrer le backend

```bash
cd api
mvn spring-boot:run
```

Le backend sera disponible sur `http://localhost:8080`.

### Démarrer le frontend

```bash
cd client
ng serve
```

Le frontend sera disponible sur `http://localhost:4200`.

