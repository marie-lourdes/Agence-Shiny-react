import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(false)// par defaut on met le state is loading a false 
    const [datas, setData] = useState({})
    const [error, setError] = useState(false)

    // apres le premier render (uniquement) du composant dont le state est vide,
    //useEffet execute la requête avec fetch qui met a jour le state avec les données requêté sur l api,
    //le composant est re-render avce le state mis a jour mais useEffect n execute plus la requete apres,
    // malgré le re-render de mise a jour du state grace  au tableau vide

    useEffect(() => {

        // arrete la fonction useEffect
        if (!url) return

        // delimite le debut du chargement des donnés ce qui evite les moment de blanc qui affichera a la place un loader dans le render du composant
        // avant la mise a jour du state avec les données de l api
        setIsLoading(true)

        /* avec l enchainement des promesses then qui recuperes les promesses resolu , non resolu, pending ci-dessous la requete ne fonctionné pas avec le hook useFetch 
 et tout partculierement le useEffect qui ne tolere pas les fonctions asynchrone mais si on apelle directement la fonction asynchrone a l interieur ca fonctionne 
Utiliser une async fonction fait retourner à la fonction de retour une Promesse au lieu d'une fonction de nettoyage.
React n'attends pas une Promesse mais une fonction.
Function aync :
Une fonction qui permet d'utiliser des instructions asynchrone avec le mot clé await, ce qui bloquera l'execution du code tant que la Promesse après laquelle le mot cléawaitse trouve n'aura pas résolu…
Cette fonction va également retourner une Promesse, peu importe si l'on a explicitement retourné quelque chose ou non( lobjet vide de useState). Dans le cas où l'on retourne une donnée,
 elle sera enveloppée dans le contenu de resolution de la Promese que la fonction va créer et retourner automatiquement.
 On apelle directement la fonction async  sans callBack en parametre de la fonction asynchrone
*/
        async function fetchData() {
            try {

                const response = await fetch(url)

                const data = await response.json()

                setData(data)

            } catch (err) {
                console.log(err)

                // retourne un erreur dans le state qui actvera l affichage d un message d erreur dans le dom dans survey.jsx
                // a la recuperation du state isError dans survey.jsx
                setError(true)

            } finally {
                setIsLoading(false)
            }
        }

        fetchData()

    }, [url])
    // le useEffect se declenche a chaque changement d url avec le tableau de dependance

    // le hook useFetch retourne un objet les states
    return { isLoading, datas, error }

}


/*  
export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(false)// par defaut on met le state is loading a false 
    const [datas, setData] = useState({})
    const [isError, setError] = useState(false) 
 useEffect(() => {
        if (!url) return
        // arrete la fonction useEffect
        // delimite le debut du chargement des donnés ce qui evite les moment de blanc qui affichera a la place un loader dans le render du composant
        // avant la mise a jour du state avec les données de l api
        setIsLoading(true)
        fetch(url)
            .then((response) => {
                console.log("response", response)
                response.json()
            })
            .then((data) => { // on recupere l 'objet nommé surveyData dans l objet de la reponse
                console.log("data surveydata", data)

                setData(data)

                setIsLoading(false)
            })
            .catch((error) => {
                setError(true)
                console.log("erreur requete", error)
            });

    }, [url])
    // le useEffect se declenche a chaque changement d url avec le tableau de dependance

    // le hook useFetch retourne un objet les states
return { isLoading, datas, isError }
}*/
