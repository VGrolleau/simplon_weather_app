# Mini projet météo / Mini weather project

## Sommaire / Summary

- [Version française](#version-française)
    - [Scénario](#scénario)
    - [Prérequis](#prérequis)
    - [Installation et lancement](#installation-et-lancement)
- [English version](#english-version)
    - [Script](#script)
    - [Prerequisites](#prerequisites)
    - [Installation and startup](#installation-and-startup)

---

## Version française

Projet pour la préparation à la journée de sélection pour le parcours de formation Concepteur.trice Développeur.euse D’application avec Simplon et MAIF.

### Scénario

Vous êtes développeur web pour le compte d’une agence web. Votre agence a signé un contrat pour le développement d’interfaces météo à destination des usagers du réseau de transport en commun de plusieurs villes de taille moyenne en France. Les écrans seront intégrés aux écrans d’information dans les stations et dans les transports. Les écrans doivent être programmés avec les technologies web, embarquées dans la webview du système des écrans de la compagnie de transports en commun de la ville. Exemples d’interfaces météo :
- https://github.com/PritamSarbajna/simple-weather-website
- https://github.com/abdellatif-laghjaj/weather-web-app

L’interface ne doit pas inclure de moteur de recherche pour la localisation de l’information météo.
Mais, elle doit inclure un fichier de configuration (JSON par exemple) dans lequel l’information de la ville concernée sera entrée par l’entreprise de transport, et utilisée par votre code pour récupérer les bonnes données météo.

### Prérequis

- HTML/CSS (intégration de composants et interfaces standards)
- JavaScript (DOM, fetch)
- API de [Open Weather Map](https://openweathermap.org/) (récupération des données météo)
- [npm](https://www.npmjs.com/) (installation et gestion des dépendances / modules supplémentaires)
- [express](https://www.npmjs.com/package/express) (création d'un serveur web pour permettre l'utilisation du fichier `config.json`)
- [dotenv](https://www.npmjs.com/package/dotenv) (récupération des variables d'environnement à partir du fichier `.env`)
- [axios](https://www.npmjs.com/package/axios) (réalisation des appels à l'API via les requêtes HTTP)
- [nodemon](https://www.npmjs.com/package/nodemon) (utilitaire qui redémarre automatiquement le serveur lorsqu'un changement est détecté)

### Installation et lancement

1. Forker la branche actuelle du projet sur votre github
2. Cloner le repository en local
3. Initialiser `npm` dans le projet
4. Installer les paquets `express`, `dotenv`, `axios` et `nodemon`
5. Créer un compte sur Open Weather Map pour obtenir une clé d'API
6. Mettre cette clé dans un fichier `.env` à la racine du projet
7. Préciser un port dans le fichier `.env` si 3000 ne convient pas
8. Lancer la commande `npm run devStart`
9. Accéder à l'application via http://localhost:`port`/ (remplacer `port` par celui défini au préalable)

---

## English version

Project to prepare for the selection day for the Application Designer Developer training path with Simplon and MAIF.

### Script

You are a web developer working for a web agency. Your agency has signed a contract to develop weather interfaces for public transport users in several medium-sized cities in France. The screen will be integrated with informations displays in stations and on public transport. The screens are to be programmed using web technologies, embedded in the city's public transport company's screen system webview. Examples of weather interfaces:

- https://github.com/PritamSarbajna/simple-weather-website
- https://github.com/abdellatif-laghjaj/weather-web-app

The interface should not include a search engine for locating weather information.
It does, however, need to include a configuration file (JSON, for example) into which the information for the city in question will be entered by the transit company, and used by your code to retrieve the correct weather data.

### Prerequisites

- HTML/CSS (integration of standard components and interfaces)
- JavaScript (DOM, fetch)
- [Open Weather Map](https://openweathermap.org/) API (weather data retrieval)
- [npm](https://www.npmjs.com/) (installation and management of additional dependencies / modules)
- [express](https://www.npmjs.com/package/express) (creation of a web server to enable use of the `config.json` file)
- [dotenv](https://www.npmjs.com/package/dotenv) (retrieve environment variables from the `.env` file)
- [axios](https://www.npmjs.com/package/axios) (making API calls via HTTP requests)
- [nodemon](https://www.npmjs.com/package/nodemon) (utility that automatically restarts the server when a change is detected)

### Installation and startup

1. Fork the current project branch on your github
2. Clone the repository locally
3. Initialize `npm` in the project
4. Install `express`, `dotenv`, `axios` and `nodemon` packages
5. Create an Open Weather Map account to obtain an API key
6. Put this key in an `.env` file in the project root.
7. Specify a port in the `.env` file if 3000 is not suitable.
8. Issue the command `npm run devStart`.
9. Access the application via http://localhost:`port`/ (replace `port` with the one previously defined)