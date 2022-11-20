import { useRouteMatch, useParams, Link } from 'react-router-dom'


function Survey() {
    const { questionNumber } = useParams()
    const { path, url } = useRouteMatch()
    console.log("url", path)
    const suiv = questionNumber >= 1 && questionNumber < 10 ? (Number(url) += 1) : null
    const prec = questionNumber > 1 && questionNumber <= 10 ? (Number(url) - 1) : null

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`${suivPrec}`}>Suivant</Link>

            <Link to={`${suivPrec}`}>Précédent</Link>

        </div>
    )
}

export default Survey
