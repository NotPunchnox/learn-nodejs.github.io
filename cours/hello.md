# Écrire et exécuter un script Node.js simple.

## Objectif
Dans cette sorte de leçon je vais vous montrer comment écrire et exécuter un script Node.js simple.

## Écrire un script Node.js
/!\ **Pour écrire un script Node.js, il faudrait que vous utilisez un éditeur de texte comme [Visual Studio Code](https://code.visualstudio.com/) ou [Atom](https://atom.io/).**

- Une fois l'éditeur de texte installé, ouvrez un dossier souvent la combinaison de touche est `Ctrl + O` ou `Cmd + O` et sélectionnez le dossier dans lequel vous voulez créer votre premier script.

- Une fois le dossier ouvert, créez un nouveau fichier et nommez le `hello.js`.

- Ensuite, ouvrez le fichier et écrivez le code suivant :
```js
    console.log("Ceci est mon premier programme !");
```
- Maintenant on va executer le programme,
  
  pour se faire vous allez ouvrir un terminal *( recherchez l'onglet terminal dans votre étideur de texte, ou utilisez le cmd en allant dans le bon répertoire )*
  ![terminal](../screens/terminal%20vscode.png)

- Quand vous voulez lancer un fichier nodejs il faut écrire la commande suivante dans le terminal :
`node nom_du_fichier.js` donc `node hello.js`

le terminale devrait vous afficher le message suivant :
`Ceci est mon premier programme !`


Et voilà vous avez écrit votre premier script Node.js !


Si vous voulez continuer à apprendre je vous propose d'aller à la leçon suivante : [Les variables et les types de données en JavaScript.](../bases/variables.md)