import { useContext } from 'react'
import { SurveyContext } from '../../utils/Context'

import { StyledLink } from "../../bases/atoms/Link.js"

import { Loader, Spinner } from "../../utils/Loader"

//import du hook-custom useFetch
import { useFetch } from "../../utils/hooks-custom/useFetch.js"
import { useTheme } from "../../utils/hooks-custom/useTheme.js"


// import styled-components
import { ResultsContainer, ResultsTitle, DescriptionWrapper, JobTitle, JobDescription } from './Results.js'

//fonction pour req.quey , les params de l url
function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

function Results() {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatFetchParams(answers)

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  )

  if (error) {
    return <span>Il y a un problème</span>
  }

  const resultsData = data?.resultsData

  return isLoading ? (
    <Loader className="loader-freelances">
      <Spinner className="spinner1" />
      <Spinner className="spinner2" />
      <Spinner className="spinner3" />
      <Spinner className="spinner4" />
    </Loader>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {result.title}
              {index === resultsData.length - 1 ? '' : ','}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )



}

export default Results

/*chaque entree des objext transformé en tableau
  const answerRecap = Object.entries(answers);
  console.log("answerRecap", answerRecap)

  return (
    <ResultContainer>
      <h1>Résultats</h1>
      //afficher les reponse dans la page de resultats
      {answerRecap.map((answer) => <div className="answer">{answer.join(":")}</div>)}

    </ResultContainer>
  )*/