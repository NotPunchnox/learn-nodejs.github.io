# 2. Installation de Node.js

### Compatibilité des plateformes
Node.js est compatible avec Windows, macOS et Linux, ce qui signifie que vous pouvez l'installer sur la plateforme de votre choix.

### Installation sur Windows
Pour installer Node.js sur Windows, suivez ces étapes :

1. Rendez-vous sur [le site de Node.js](hhttps://nodejs.org/fr/download).
2. Téléchargez la version LTS (recommandée) pour Windows.
3. Lancez l'installeur téléchargé et suivez les étapes d'installation.
4. Pour vérifier que Node.js est correctement installé, ouvrez un terminal et tapez la commande suivante : `node -v`

*Pour vérifier npm (Node Package Manager), utilisez cette commande :* `npm -v`


### Installation sur Linux
Pour installer Node.js sur Linux, suivez ces étapes :

1. Rendez-vous sur [le site de Node.js](https://nodejs.org/fr/download).
   ![nodejs](../screens/download.png)
2. Téléchargez la version LTS (recommandée) pour Linux.
3. Décompressez le fichier téléchargé.
4. Ouvrez un terminal et accédez au répertoire où vous avez décompressé le fichier.
5. Exécutez la commande `./configure`.
6. Puis `make`.
7. Et pour finir executez la commande `sudo make install`.
8. Pour vérifier que Node.js est correctement installé, ouvrez un terminal et tapez la commande suivante :
`node -v`

*Pour vérifier npm (Node Package Manager), utilisez cette commande :* `npm -v`

#### Installation sur macOS
Pour installer Node.js sur macOS, suivez ces étapes :

1. Rendez-vous sur [le site de Node.js](https://nodejs.org/fr/download).
2. Téléchargez la version LTS (recommandée) pour macOS.
3. Lancez l'installeur téléchargé et suivez les étapes d'installation.
4. Pour vérifier que Node.js est correctement installé, ouvrez un terminal et tapez la commande suivante : `node -v`

*Pour vérifier npm (Node Package Manager), utilisez cette commande :* `npm -v`


#### Installation avec un gestionnaire de paquets
Si vous utilisez un gestionnaire de paquets pour installer vos applications, vous pouvez utiliser les commandes suivantes :

- Pour Debian, Ubuntu, etc... : `sudo apt install nodejs`

- Pour Fedora, CentOS, etc... : `sudo yum install nodejs`

- Pour Arch Linux : `sudo pacman -S nodejs`

- Pour macOS avec Homebrew : `brew install node`

- Pour Windows avec Chocolatey : `choco install nodejs`

### Installation avec nvm
Vous pouvez utiliser plusieurs versions de nodejs sur votre machine en utilisant nvm ( Node Version Manager )

*Cela peut être intéressant si vous voulez tester votre code avec plusieurs versions de nodejs ou que vous voulez utiliser une version spécifique car une librairie n'est pas compatible avec la derniere version.*

Commandes `nvm` pour installer et changer la version de Node.js:

- `nvm install node` : Installe la dernière version de Node.js
- `nvm install 12.18.3` : Installe la version 12.18.3 de Node.js
- `nvm use node` : Utilise la dernière version de Node.js
- `nvm use 12.18.3` : Utilise la version 12.18.3 de Node.js


#### Et voià ! Après ces instructions vous devriez avoir Node.js d'installé sur votre machine.

Vous pouvez passer à la leçon suivante en cliquant sur le lien suivant: [Écrire et exécuter un script Node.js simple.](../cours/hello.md)