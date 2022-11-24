import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
]

function Freelances() {
  const [profilData, setProfilData] = useState([])
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
  }, [])
  if (errors) return <div className="error"> Une erreur est survenue</div>
  return (

    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? <Loader /> :
        <CardsContainer>
          {profilData.map((profile) => (
            <Card
              key={`${profile.id}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      }
    </div>

  )
}

export default Freelances
