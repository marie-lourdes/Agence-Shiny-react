import { Link, useParams } from "react-router-dom"
import { useContext } from 'react'
import { Loader, Spinner } from "../../utils/Loader"
//import du SurveyContext
import { SurveyContext } from '../../utils/Context'

//import du hook-custom useFetch
import { useFetch } from "../../utils/hooks-custom/useFetch.js"
import { useTheme } from "../../utils/hooks-custom/useTheme.js"

// styled component
import { SurveyContainer, QuestionTitle, QuestionContent, ReplyBox, ReplyWrapper, LinkWrapper } from "./Survey.js"

function Survey() {

    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber);
    // la condition empeche d aller à zero, sera egale a 1 si c est sur un sion incremente
    const prev = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const next = questionNumberInt + 1

    //Import state de surveyContext de surveyProvider
    const { answers, saveAnswers } = useContext(SurveyContext)

    // création de la fonction qui met a jour le state answer au click du bouton sur la reponse
    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer })// creation de la propriété entre bracket avec le numero de la question qui est le parametre de requete
    }

    // recuperation par destructuration des states (de l objet retourné par le hook useFetch) mise a jour par fetch dans le hook useFetch avec useEffect sur chaque modification d url
    const { isLoading, data, error } = useFetch(`http://localhost:8000/survey`);
    //recuperation de la propriété surveyData dans la data recupéré par useFetch
    console.log("data set datas", data)

    const { surveyData } = data
    console.log("surveydata = data", surveyData)

    const { theme } = useTheme()

    // gestion de l erreur de requete de catch de la methode fetch dans le hook useFetch et affichage pour prevenir l utilisateur qu il y a eu un probleme
    if (error) return <div> Une erreur est survenue</div>


    return <section>
        <h1> Questionnaire</h1>
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {/* INTEGRATION DU LOADER AVANT LE CHARGEMENT DU CONTENU DE LA QUESTION DE PUIS FETCH AVEC USEEFFECT()*/}
            {/* condition d affichage du loader tant que les données ne sont pas mise a jour avec fetch qui recupere les données 
            et then qui  envoit  la promesse dans la mise a jour du state*/}

            {isLoading ?
                <Loader>
                    <Spinner className="spinner1" />
                    <Spinner className="spinner2" />
                    <Spinner className="spinner3" />
                    <Spinner className="spinner4" />
                </Loader> :
                <QuestionContent theme={theme}>{surveyData && surveyData[questionNumber]}</QuestionContent>}
            {/* recuperation de la propriete de suveyData avec le param uri de /survey/: questionNumber*/}


            {/* on met a jour le state answer du SurveyProvider a true ou false*/}
            <ReplyWrapper>
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                    theme={theme}
                >
                    Oui
                </ReplyBox>
                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                    theme={theme}
                >
                    Non
                </ReplyBox>
            </ReplyWrapper>

            <LinkWrapper theme={theme}>
                <Link to={`/survey/${prev}`}>Précédent</Link>
                {surveyData && surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${next}`} >Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>

            {/* <LinkWrapper>
                <Link to={`/survey/${prev}`}>Précédent</Link>
                {/*on verifie si la question suivante contient une valeur, si ce n est pas le cas on redirige vers la page resultat
                {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${next}`}>Suivant</Link>
                ) : (
                    <Link to="/results">Résultats</Link>
                )}
            </LinkWrapper>*/}
        </SurveyContainer>
    </section>


}

export default Survey

    //GESTION DE L ERREUR DE LA REQUETE
    //  const [isError, setIsError] = useState(null)


    // Cette syntaxe permet aussi bien de faire des calls API.
    // Mais pour utiliser await dans une fonction, il faut que celle-ci soit async (pour asynchrone).
    // Comme la fonction passée à useEffect ne peut pas être asynchrone,
    // il faut utiliser une fonction qui est appelée dans useEffect et déclarée en dehors, comme ici 👇.
    // Essayez de commenter le code créé dans le chapitre et de décommenter fetchData pour voir.

    //useEffect ( () => {
    //setIsLoading(true)
    // async function fetchData() {

    // try {
    //   const response = await fetch(`http://localhost:8000/survey`)
    //   const { surveyData } = await response.json() destructuration pour recuperer la propriété surveyData dans l objet reponse
    //   setSurveyData(surveyData)
    // } catch (error) {
    // console.log('===== error =====', error)
    // setIsError(true)
    // } finally{
    //setIsLoading(false)
    //  }

    // }
    //fetchData() ;

    // }, [] )