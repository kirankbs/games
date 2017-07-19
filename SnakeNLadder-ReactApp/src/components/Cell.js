import { PlayerIcon, Player } from './Players'
import PropTypes from 'prop-types'

export const Cell = ({n, playerIcons}) => (
    <div className="game-cells">
            { playerIcons } {n}
    </div>
)


Cell.propTypes = {
    n: PropTypes.number.isRequired,
    playerIcons: PropTypes.arrayOf(PlayerIcon).isRequired
}

Cell.defaultProps = {
    players: []
}


/*  install prop-types package from npm package instead of using from react package. 
    Default Properties is set for list of players in particular cell.
    PropTypes for Type Safety
    destructuring object-members
*/