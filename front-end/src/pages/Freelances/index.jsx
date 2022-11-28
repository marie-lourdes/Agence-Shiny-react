//import du compisant react Card
import React from "react"

import Card from "../../components/Card"
import { Loader, Spinner } from "../../utils/Loader"


//import du styled component
import { CardContainer, PageSubtitle, PageTitle } from "./Freelances.js"


import { useFetch } from "../../utils/hooks-custom/useFetch.js"
import { useTheme } from "../../utils/hooks-custom/useTheme.js"

/* definition d une liste de données de profils
const freelanceProfiles = [
    {
        name: "Jane Doe",
        jobTitle: "Devops",

    },
    {
        name: "John Doe",
        jobTitle: "Developpeur frontend",

    },
    {
        name: "Jeanne Biche",
        jobTitle: "Développeuse Fullstack",

    },
] */

function Freelances() {
    const { isLoading, data, error } = useFetch(`http://localhost:8000/freelances`);

    const freelancersListe = data?.freelancersList
    console.log("data", data)

    const { theme } = useTheme()


    console.log("profldata", freelancersListe)
    if (error) {
        return <div className="error"> Une erreur est survenue...</div>

    }

    return (<React.Fragment>
        <section>
            <h1>Freelances </h1>

            <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isLoading ? (
                <Loader className="loader-freelances">
                    <Spinner className="spinner1" />
                    <Spinner className="spinner2" />
                    <Spinner className="spinner3" />
                    <Spinner className="spinner4" />
                </Loader>
            ) : (
                <CardContainer >
                    {freelancersListe.map((profile) =>
                        <Card
                            key={`${profile.id}`}// definition des key pour les liste de données profiles, a chaque generation de l element courant profile
                            label={profile.job}
                            //le prop picture: est defini par defaut dans la fonction Card
                            title={profile.name}
                            picture={profile.picture}
                        />

                    )}
                </CardContainer>
            )}
        </section>

    </React.Fragment>
    )
}

export default Freelances

/* const [profilData, setProfilData] = useState([])
 const [isLoading, setIsLoading] = useState(false)
 const [errors, setError] = useState(null)
 
 useEffect(() => {
     setIsLoading(true)
     fetch("http://localhost:8000/freelances")
         .then((res) => {
             console.log("reponse", res)
             return res.json()
         })
         .then(({ freelancersList }) => {
             console.log("profilData", freelancersList)
             setProfilData(freelancersList)
             setIsLoading(false)
         })
         .catch((error) => {
             console.log("erreur requete", error)
             setError(true)
         })
 }, [])*/