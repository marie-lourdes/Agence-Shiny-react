// import de PROPTYPES pour les props Card 
import PropTypes from "prop-types"
// import des profils et de l image par defaut de picture
import defaultPictures from "../../assets/profil.png"

function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={100} width={100} />
            <span>{title}</span>
        </div>
    )
}

// definition des PropTypes dans l objet propTypes du composant Card

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

//definition d un prop title, label, par defaut, une image par defaut si l utilisateur n a pas defni de photo
Card.defaultProps = {
    title: '',
    label: '',
    picture: defaultPictures
}

export default Card