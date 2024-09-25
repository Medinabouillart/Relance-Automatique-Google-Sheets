# Relance-Automatique-Google-Sheets
Automatisation des rappels de relance avec Google Sheets et Google Apps Script.
# Automatisation des rappels de relance avec Google Sheets

Ce projet utilise Google Sheets et Google Apps Script pour automatiser les rappels par e-mail en fonction de la date de relance et du statut dans une feuille de calcul.

## Fonctionnalités

- Vérifie automatiquement les contacts et les dates de relance.
- Envoie un e-mail lorsque la date de relance est atteinte et que le statut est "En attente".
- Utilise Google Apps Script pour gérer la logique du script et l'envoi d'e-mails.

## Technologies utilisées

- **Google Sheets** : Pour la gestion des contacts.
- **Google Apps Script** : Pour l'automatisation du processus de relance.

## Comment l'utiliser

1. Créez une feuille Google Sheets avec des colonnes comme `Entreprise`, `Nom du contact`, `Statut`, et `Date de relance`.
2. Copiez le code présent dans le fichier `scriptRelance.js` dans Google Apps Script.
3. Définissez un déclencheur pour exécuter le script quotidiennement afin d'automatiser vos rappels.

## Auteurs

- [Médina](https://www.linkedin.com/in/medina-bouillart/) - Développeuse Web
