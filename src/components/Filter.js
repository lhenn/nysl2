import React, {Component} from 'react'

class Filter extends Component {
  state={
    open:false,
    selectedTeams: []
  }
  handleFilterClick = () => {
    this.setState({
      open: !this.state.open
    })
  }
  handleCheckboxChange = (e) => {
    let selectedTeams = [...this.state.selectedTeams];

    if(selectedTeams.includes(e.target.value)) {
      selectedTeams.splice(selectedTeams.indexOf(e.target.value), 1);
    } else {
      selectedTeams.push(e.target.value);
    }
    
    this.setState({
      selectedTeams: selectedTeams
    });
  }

  render() {
    console.log(this.props.teams)
    const Toggle = () => {
      return(
        <button onClick={this.handleFilterClick}> Filter by team... </button>
      )
    }
    const options = this.props.teams.map((t, index) => {
        return (
        <div key={index}>
          <input type="checkbox" value={t.division} onChange={this.handleCheckboxChange}/>
          {t.division} {t.name}
        </div>
        )
      })

    if(this.state.open) {
      return (
        <div>
          <Toggle />
          <div id="filter-options">
            {options}
          </div>
        </div>
      )
    } else {
      return (
      <div>
        <Toggle />
      </div>
      )
    }
  }
}

export default Filter;
