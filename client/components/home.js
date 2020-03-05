import React, { useState } from 'react';
import {
  Route, Link
} from 'react-router-dom';
// import { Link } from 'react-router-dom'; // für den Routing in React
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'


const Home = () => {
  const [counter] = useState(0)
  return (
    <div>
      <Head title="Hello" />
      <div> Hello World Dashboard{counter} </div>
      <Link to="/salo/pampushi/s/4esnokom">Go for pampushki</Link>
      <br />
      <Link to="/salo/okroshka/na/kefire">Go for okroshka</Link>
      <br />
      <Link to="/dashboard">Go Home</Link>
      <br />
      <a href="/"> Go  Home</a>

      <Route exact path="/salo/pampushi/s/4esnokom" component={() => <div>Geroyam Slava</div>} />
      <Route exact path="/salo/okroshka/na/kefire" component={() => <div>My vam ne rady</div>} />
    </div>
  )
}

Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
