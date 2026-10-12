# Version V0.2.0 (16 Octobre 2025)
*Statut : Architecture finalisée, Corrections de bugs majeures, Début de la phase d'enrichissement.*

### 🚀 Nouvelles Fonctionnalités & Améliorations
**Structure de Navigation :**
* **Architecture Multipage Implémentée :** Début de l'architecture pour les futures pages de projets (`tous-les-projets.html`, `projet-detail.html`) et le formulaire de contact (`contact-form.html`).
* **Lien du CV :** Lien du CV est désormais prêt pour intégration du fichier PDF.

**Footer & Contact :**
* **Liens de Contact Dynamiques (Footer) :** Ajout d'une barre de liens cliquables dans le Footer (LinkedIn, Email, Téléphone). La fonction JavaScript `copyToClipboard()` a été ajoutée.
* **Section "Contact & Ressources" :** Mise en page finale approuvée.

**Compétences (Refonte Totale) :**
* **Séparation Hard/Soft Skills :** Organisation en deux tableaux distincts.
* **Simplification :** Suppression de la colonne "Statut" jugée redondante.
* **Formations :** Amélioration de la présentation sous forme de cartes.

### ✅ Corrections de Bugs (Fixes)
**Navigation / Indicateur de Scroll :**
* **Collision Logo/Barre :** Correction de la collision de l'indicateur de défilement avec le logo (`z-index` ajusté).
* **Bug de Bulle sur la dernière ancre :** Ajustement du script pour que la bulle s'active correctement sur le dernier lien.
* **Bug d'affichage du Menu :** Rétablissement de la structure HTML de la barre de navigation.

**Design & Mise en page :**
* **Footer Vagues Manquant :** Code HTML et CSS du `vagues-footer` réintégré et fonctionnel.
* **Projets :** Rétablissement de l'affichage en grille de cartes dynamique.
* **Barres de Progression :** Rétablissement de la logique JavaScript assurant l'application des couleurs.
* **Texte :** Remplacement des doubles étoiles `**texte**` par la balise HTML `<strong>`.

### ⚠️ Problèmes Connus (Bugs Restants)
* **Affichage des Langues (Émojis) :** Les codes de pays s'affichent au lieu des émojis de drapeaux sur certains navigateurs.
* **Affichage des Langues (Espace) :** Le bloc `langues-progress` est encore considéré comme trop volumineux.
* **Contenu :** Les sections Hard Skills et Soft Skills nécessitent encore d'être enrichies.

---

# Version V0.3.0 (17 Octobre 2025)
*Statut : Architecture finalisée, Design de la page d'accueil validé.*

### 🚀 Nouvelles Fonctionnalités & Améliorations
**I. Esthétique & Mise en Page (Finalisée)**
* **Hauteur de la Navigation Augmentée :** Augmentation de la hauteur de la barre de navigation de 70px à 105px (`--hauteur-nav`).
* **Harmonisation de la Section Langues :** La section Langues est désormais affichée dans une carte blanche (`.carte-unifiee`).

**II. Architecture Multipage (Structure)**
* **Structure des Pages de Projets :** Création et initialisation des six nouveaux fichiers HTML pour les fiches de projets.
* **Intégration du Footer :** Le code HTML complet du Footer a été intégré à tous les nouveaux fichiers de projets.

### ✅ Corrections de Bugs (Fixes)
* **Lien PDF (Formations) :** Le lien cliquable des formations est désormais fonctionnel.
* **Bulle de Navigation (Pages Projets) :** L'indicateur dynamique (`.bulle`) est désormais fixé sous le lien "Projets" sur toutes les pages intérieures.

### ⏭️ Prochaines Étapes (V0.4.0)
* Développement du Formulaire de Contact.

---

# Version V0.4.0 (17 Octobre 2025)
*Statut : Fonctionnalité clé ajoutée, Bugs de navigation critiques corrigés.*

### 🚀 Nouvelles Fonctionnalités & Améliorations
**Formulaire de Contact (`contact-form.html`) :**
* Création de la page de contact dédiée, reprenant la charte graphique du site.
* Développement du formulaire HTML avec les champs `Nom`, `Email`, `Message` et un bouton `Envoyer`.
* Implémentation d'une solution fonctionnelle via un service externe (type Formspree).
* Ajout du style CSS pour une intégration visuelle parfaite.

### ✅ Corrections de Bugs (Fixes)
**Bulle de Navigation (Pages Projets) :**
* Correction du bug qui positionnait mal la bulle sur les pages de projet.
* Standardisation de la structure du `<header>` sur toutes les pages.
**Bulle de Navigation (Défilement Accueil) :**
* Correction du bug où l'indicateur sautait la section "Projets" lors du défilement.
**Menu Déroulant "Projets" :**
* Correction du positionnement du panneau, maintenant centré sous l'onglet "Projets".

---

# Version V0.5.0 (17 Octobre 2025)
*Statut : Phase d'enrichissement majeure du contenu textuel.*

### ✨ Peaufinage & Contenu
**Remplissage des Pages Projets :**
* Intégration du contenu textuel détaillé pour les 5 pages de projet.
**Structure de Contenu Uniformisée :**
* Toutes les pages de projet partagent désormais une structure narrative cohérente.
**Refonte du Texte d'Accueil (`index.html`) :**
* Réécriture complète du paragraphe d'introduction pour créer un récit personnel expliquant le choix du BUT GEII.
* Mention de la deuxième année et de la spécialisation "Électricité et Maîtrise de l'Énergie".

---

# Version V0.6.0 (17 Octobre 2025)
*Statut : Refonte et harmonisation de la présentation des compétences.*

### 🚀 Nouvelles Fonctionnalités & Améliorations
**Refonte des "Soft Skills" (`index.html`) :**
* Remplacement de l'ancienne présentation par un tableau structuré (`Compétence` / `Mise en application`).
**Harmonisation des Tableaux de Compétences :**
* Les tableaux sur les pages de projet utilisent désormais les barres de progression visuelles.

### ✨ Peaufinage & Contenu
**Synthèse des "Hard Skills" (`index.html`) :**
* Création d'une liste consolidée et exhaustive des compétences techniques clés.
**Ajustement Visuel :**
* Réduction de la graisse de la police pour les titres de compétences dans les tableaux.

---

# Version V0.7.0 (17 Octobre 2025)
*Statut : Intégration multimédia et finalisation du contenu visuel.*

### 🚀 Nouvelles Fonctionnalités & Améliorations
**Intégration des Vidéos :**
* Ajout des 6 vidéos de démonstration (hébergées sur YouTube) sur les pages de projet.
**Intégration des Images :**
* Ajout des 4 images de schémas et de montages sur les pages de projet.
**Coloration Syntaxique du Code :**
* Implémentation de la bibliothèque Prism.js pour afficher les extraits de code.

### ✅ Corrections de Bugs (Fixes)
**Dimensionnement des Médias :**
* Ajustement du CSS (`max-height`) pour que les images et vidéos aient une hauteur raisonnable.

---

# Version V0.8.0 (17 Octobre 2025)
*Statut : Finalisation du projet, prêt pour déploiement.*

### 🚀 Nouvelles Fonctionnalités & Améliorations
**Création du `CHANGELOG.md` :**
* Mise en place d'un fichier de suivi de versions en format Markdown.

### ✨ Peaufinage & Contenu
**Vérification Finale :**
* Relecture complète de tous les textes.
* Vérification de tous les liens internes et externes.
* Confirmation du bon affichage de tous les médias.
* Correction de l'oubli du footer sur la page `tous-les-projets.html`.

---

# Version V0.9.0 (17 Octobre 2025)
*Statut : Peaufinage de l'expérience utilisateur (UX) et Responsive Design.*

### 🚀 Nouvelles Fonctionnalités & Améliorations
**I. Responsive Design (Adaptation Mobile) :**
* **Implémentation Complète :** Ajout de Media Queries en CSS pour assurer une navigation et une lisibilité optimales sur tablettes et téléphones.
* **Transformation des Tableaux :** Les tableaux de compétences (Hard & Soft Skills) se transforment désormais en liste de cartes sur les petits écrans pour éviter le défilement horizontal.
* **Ajustement du Header :** Le header se réorganise sur mobile pour rester fonctionnel et esthétique.

**II. Améliorations Visuelles & Dynamiques :**
* **Fond Animé "Tornade" :** Ajout d'une animation de fond subtile avec deux vagues de lumière bleue se déplaçant en diagonale pour dynamiser le design sans gêner la lecture.
* **Header Dynamique au Défilement :**
    * La barre de navigation devient semi-transparente avec un effet de "verre dépoli" (`backdrop-filter`) lorsque l'utilisateur fait défiler la page.
    * Le bloc logo se rétracte désormais sur la gauche pour libérer de l'espace visuel.
    * Une "languette" apparaît lorsque le logo est caché, indiquant à l'utilisateur qu'il peut faire réapparaître le logo en survolant la barre.

### ✨ Peaufinage & Contenu
* **Indicateur de Défilement :**
    * La couleur de l'indicateur a été changée pour un bleu semi-transparent, s'harmonisant mieux avec le nouveau design.
    * Le script a été ajusté pour que la barre s'arrête juste avant le footer, pour une finition plus propre.

---

# Version V1.0 (18 Octobre 2025)
*Statut : Première version stable déployée.*

### 🚀 Fonctionnalités Principales
* Site portfolio complet avec 5 pages de projet détaillées (contenu, images, vidéos).
* Design responsive pour bureau, tablette et mobile.
* Header dynamique avec effet de transparence, logo rétractable et languette d'indication.
* Animation de fond "tornade".
* Formulaire de contact fonctionnel via service externe.
* Intégration de vidéos YouTube, images et blocs de code avec coloration syntaxique (Prism.js).
* Journal des modifications (`CHANGELOG.md`) initialisé.

### ✨ Contenu & Peaufinage
* Texte d'introduction finalisé, incluant le parcours et les motivations.
* Sections compétences (Hard & Soft Skills) structurées et complétées.
* **Mise à jour du CV** vers la dernière version et lien corrigé dans la section Contact.

# Version V1.1 (18 Octobre 2025)
*Statut : Corrections UX et ajustements visuels post-déploiement.*

### ✨ Peaufinage & Contenu
* **Accueil :** Titre "Bonjour, je suis Raphaël." intégré à la carte d'introduction pour une meilleure harmonie visuelle.
* **Compétences :** Couleur du texte des pourcentages sur les barres de progression mise en noir pour améliorer la lisibilité.
* **Animation "Tornade" :** Animation ajustée pour être plus présente à l'écran.
* **Indicateur de Défilement :** Couleur ajustée et arrêt avant le footer.

### ✅ Corrections de Bugs (Fixes)
* **Cartes Contact :** Styles (fond blanc, ombre) restaurés après avoir été affectés par la modification de `.carte-unifiee`.
* **Tableaux Responsive :** Les titres ("Compétence :", "Détail :", etc.) dans la vue mobile sont désormais centrés.
* **Navigation Responsive :** Les éléments du menu sont maintenant correctement alignés verticalement sur mobile.
* **Languette du Logo :** Positionnement et timing d'apparition/disparition corrigés pour une interaction logique et sans décalage visuel. Le logo se cache maintenant complètement.

# Version V1.2 (15 Décembre 2025)
*Statut : Ajout de projets majeurs de 2ème année et mise à jour de la structure.*

### 🚀 Nouvelles Fonctionnalités & Contenu
**Ajout de Nouveaux Projets (2ème année) :**
* **Analyseur Gisement Solaire (AGS) :** Création de la page dédiée `projet-ags.html` avec description détaillée de l'IHM LabVIEW et des défis matériels.
* **Automatisation d'un Escalier Mécanique :** Création de la page dédiée `projet-escalator.html` mettant en avant la logique séquentielle, les chronogrammes et la traduction en équations.
* **Mise à jour des Listes :** Les deux nouveaux projets ont été ajoutés en tête des listes sur la page d'accueil et la page "Tous les projets" pour respecter l'ordre chronologique inverse (plus récent en premier).

**Navigation :**
* **Menu Déroulant Global :** Mise à jour du code du menu de navigation sur l'ensemble des fichiers HTML pour inclure les liens vers les nouveaux projets.

### ✅ Corrections de Bugs (Fixes)
* **Barre de Navigation (AGS) :** Correction d'un bug de classe CSS (`actif`) qui positionnait mal l'indicateur de navigation sur la page `projet-ags.html`.

# Version V1.2.2 (16 Décembre 2025)
*Statut : Ajout de deux projets majeurs (2ème année) et correctifs d'affichage mobile.*

### 🚀 Nouveaux Projets & Contenu
* **Compétences :** Ajout des sections "Soft Skills" (Travail en binôme, Autonomie, Rigueur) et des tableaux de compétences techniques spécifiques pour ces deux nouveaux projets.

### ✨ Améliorations de la Structure
**Réorganisation Chronologique :**
* Mise à jour de la page d'accueil (`index.html`) et de la liste complète (`tous-les-projets.html`) pour afficher les projets les plus récents (Escalier & AGS) en premier.
* Mise à jour du menu déroulant de navigation sur l'ensemble des pages du site.

### 🐛 Corrections de Bugs (Mobile & Navigation)
* **AFFICHAGE MOBILE CRITIQUE (AGS) :** Suppression d'un bloc de code HTML dupliqué dans le `<header>` de la page `projet-ags.html` qui créait une **double barre de navigation** sur les téléphones.

# Version V1.3.0 (Octobre 2026)
*Statut : Harmonisation globale de la navigation, refonte narrative de l'accueil et mise à jour du profil professionnel.*

### 🚀 Nouvelles Fonctionnalités & Contenu
* **Profil & Présentation d'Accueil (`index1.html`) :** 
  * Refonte complète du texte de présentation sous forme narrative et fluide (suppression de la liste à puces rigide pour une lecture optimisée en moins d'une minute).
  * Intégration du positionnement vers la recherche d'un stage de fin d'études de 14 semaines (début mars 2027) tout en mettant en valeur les passions clés (ferroviaire, Formule 1, BIA/aéronautique, Data Center).
* **Section Expériences Professionnelles :**
  * Création de la fiche d'expérience détaillée pour le stage chez Equinix PA7 (`experience-equinix1.html`).
  * Création de la vue d'ensemble du parcours professionnel (`toutes-les-experiences1.html`).
  * Intégration de la section dédiée `#experiences` sur la page d'accueil.
* **Mise à Jour des Formations :** Correction de l'URL Google Maps exacte du Lycée Charles de Gaulle et restauration des liens cliquables 📍 sous chaque diplôme.

### 🎨 Navigation & Ergonomie
* **Menu à 5 Onglets Unifié :** Généralisation du menu déroulant "Expériences" sur l'ensemble des fiches du site.
* **Standardisation des Fichiers (`1`) :** Bascule intégrale du site vers les fichiers suffixés (`index1.html`, `style1.css`, `main1.js`, etc.).
* **Accessibilité du Logo :** Intégration du lien cliquable sur le logo du header pour un retour direct à l'accueil.
* **Footer Interactif :** Ajout de l'icône mallette (`<i class="fas fa-briefcase"></i>`) dans le footer sur toutes les pages pour un accès rapide aux expériences.

### 🛠️ Correctifs Techniques (Fixes)
* **Suppression des En-têtes Dupliqués :** Nettoyage des balises `<header>` en double sur `projet-escalator1.html` et `projet-roomba1.html`.
* **Correction Doctype :** Restauration de la structure HTML standard sur `projet-lego1.html`.
* **Mise en Page CSS :** Ajustement des styles pour les cartes de formation et les liens d'emplacement pour éliminer les coquilles d'affichage.