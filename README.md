## License
   © 2026 Elhabchi Mohammed. All Rights Reserved.

# salle_musculation_app

Application web de gestion d’une salle de musculation, prévue avec la stack MERN :
MongoDB, Express.js, React.js et Node.js.

## Structure actuelle

```text
backend/
├── package.json
└── src/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    │   ├── User.js
    │   ├── Subscription.js
    │   ├── ClassSession.js
    │   └── WorkoutPlan.js
    ├── routes/
    ├── services/
    └── utils/
frontend/
├── public/
└── src/
    ├── assets/
    ├── components/
    ├── context/
    ├── hooks/
    ├── pages/
    ├── services/
    └── styles/
```

Les dossiers frontend et backend constituent la structure de départ. Les API Express,
l’application React et la configuration de connexion à MongoDB restent à implémenter.

## Modèles de données disponibles

- **User** : nom, adresse e-mail, mot de passe haché avec bcrypt, rôle (`admin`,
  `coach` ou `member`), téléphone et date d’inscription.
- **Subscription** : membre associé, formule mensuelle ou annuelle, dates de début
  et de fin, prix, devise et statut.
- **ClassSession** : titre, description, catégorie de cours, coach, capacité,
  horaires et membres inscrits.
- **WorkoutPlan** : titre, exercices (séries, répétitions, charge, repos et notes),
  membre et coach associés.

Les modèles Mongoose se trouvent dans `backend/src/models/`.

## Prérequis

- Node.js et npm
- MongoDB (local ou service hébergé)

## Dépendances du backend

Depuis le dossier `backend` :

```bash
npm install
```

Les dépendances déclarées comprennent Express, Mongoose, bcryptjs, jsonwebtoken,
Helmet, CORS et dotenv. Le serveur et les scripts de démarrage seront ajoutés lors
de l’implémentation de l’API.
