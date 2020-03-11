import React, { useState } from 'react';
import {
  Route, Link
} from 'react-router-dom';
// import { Link } from 'react-router-dom'; // für den Routing in React
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Cookies from 'universal-cookie'
import Head from './head'
// import { scaleSequential } from 'd3';


const Home = () => {
  const cookies = new Cookies()
  let initialCounter = 0
  if (typeof localStorage !== 'undefined'
    && typeof localStorage.getItem('counter') !== 'undefined') {
    initialCounter = +localStorage.getItem('counter')
  }
  if (typeof sessionStorage !== 'undefined'
    && typeof sessionStorage.getItem('counter') !== 'undefined') {
    initialCounter = +sessionStorage.getItem('counter')
  }
  if (typeof localStorage !== 'undefined'
    && typeof localStorage.getItem('counter') !== 'undefined') {
    initialCounter = +localStorage.getItem('counter')
  }
  if (typeof cookies !== 'undefined'
    && typeof cookies.get('counterCookies') !== 'undefined') {
    initialCounter = +cookies.get('counterCookies')
  }
  const [counter, setCounterNew] = useState(initialCounter)
  const updateCounter = (counterNew) => {
    setCounterNew(counterNew)
    localStorage.setItem('counterlocalStorage', counterNew)
    sessionStorage.setItem('countersessionStorage', counterNew)
    cookies.set('counterCookies', counterNew)
  }
  return (
    <div>
      <Head title="Hello" />
      <button
        type="button"
        onClick={() => updateCounter(counter + 1)}
      >
        updateCounter
      </button>
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
