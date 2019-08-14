import React, {Component} from 'react'
import Game from './Game.js'
import Filter from './Filter.js'
import { connect } from 'react-redux'

class Schedule extends Component {
  state = {
    games: [],
    filteredGames: [],
    locations: [],
    teams: [],
    opponents: [],
  }
  componentDidMount() {
    this.getGameInfo();
  }
  getGameInfo = () => {
    fetch('https://api.myjson.com/bins/1avsuw', {
        method: "GET"
      })
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          games:json.games,
          locations:json.locations,
          teams:json.teams,
          opponents:json.opponents
        })
        console.log(json)
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    console.log('PROPS',this.props);
    const { games } = this.props.games;
    const { teams } = this.props.teams;
    return (
      <div id='schedule'>
      <h1>Upcoming Games</h1>
      <Filter teams={this.props.teams}/>
      {this.props.games.map((game, index) => {
          return (
            <Game key={index} game={game}/>
          )
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    teams: state.teams
  }
}

export default connect(mapStateToProps)(Schedule);
