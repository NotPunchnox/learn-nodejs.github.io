function calcul(a, b, c) { // on défini la fonction calcul

    let resultat = a + b / c //calcul à effectuer par la fonction

    return resultat // résultat retourné par la fonction

}

console.log(calcul(1, 2, 4)) // on appel et on affiche le résultat de la fonction


/*
Dans l'exemple ci dessous je vous ai fait un simple système d'abonnement ( aucune sécurité mise en place c'est juste pour comprendre comment ça fonctionne en gros... )

Dans cet exemple je créer une fonction du nom de Abonnement, elle permettra de savoir si la clée de l'abonnement figure parmis les clées enregistrés, comme une sorte de passport,
Si la clée fait partie des clées enregistrés alors elle est fonctionnelle autrement elle est invalide et la fonction va permettre de vérifier la validité de cette clée.

Et pour finir on affiche dans la console si l'utilisateur a l'abonnement ou non.
*/

function Abonnement(key) {// on définie la function avec le nom de l'abonnement

    const keys = ["mysupersecretkey", "mysecondarysupersecretkey"]//on définie des clées d'abonnements

    if(keys.includes(key)) {//si mon tableau "keys" contient l'argument "key" alors...
        return true // on retourne la valeur true
    } else return false //si le tableau ne contient pas la clée on retourne la valeur false

}

const key = "mysupersecretkey"//on définie la constante key ( comme la clée de l'utilisateur )

let checkIsValidKey = Abonnement(key)

if(checkIsValidKey) {//si la valeur est égale à true alors...
    console.log("Your key is valid!")//on affiche dans la console que la clée est valide
} else {//si la valeur n'est pas égale à true ( donc false ), alors...
    console.log("Your key is invalid!")//on affiche dans la console que la clée est invalid
}
