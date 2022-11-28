//import du compisant react Card
import React from "react"

import Card from "../../components/Card"
import { Loader, Spinner } from "../../utils/Loader"

import { useFetch } from "../../utils/hooks-custom/useFetch.js"

//import du styled component
import { CardContainer, PageSubtitle, PageTitle } from "./Freelances.js"

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


    const { isLoading, datas, error } = useFetch(`http://localhost:8000/freelances`)
    const freelancersList = datas?.freelancersList
    console.log("data", datas)

    console.log("profldata", freelancersList)
    if (error) {
        return <div className="error"> Une erreur est survenue...</div>

    }

    return (<React.Fragment>
        <section>
            <h1>Freelances </h1>

            <PageTitle>Trouvez votre prestataire</PageTitle>
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
                <CardContainer>
                    {freelancersList.map((profile) =>
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