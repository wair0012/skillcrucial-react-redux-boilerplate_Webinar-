import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'

const Dummy = (props) => {
  const [pageIndex, setPageIndex] = useState(0)
  // const array = useState(0)  - ist das gleiche wie oben
  // const pageIndex = array[0]
  // const setPageIndex =  array[1]
  const [showText, changeShowText] = useState({
    toggled1: true,
    toggled2: false
  }) // oder useState(true)
  const toggleSmth = () => {
    changeShowText({
      toggled1: !showText.toggled1,
      toggled2: !showText.toggled2
    }) // oder changeShowText(!showText)
  }
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps(pageIndex);
  }, [getDataProps, pageIndex])
  const me = {
    name: 'Irina',
    course: 'React',
    age: 42
  }
  const count = 0;
  if (props.isRequesting) {
    return 'Requesting...'
  }
  return (
    <div>
      <Head
        title="Hello" //  <Head  title="Hello"  {...me}  /> soll auch gehen, geht hier aber nicht
        name={me.name}
        course={me.course}
        age={me.age}
      />
      {
        // showText && (<div>Text is shown</div> )
        // showText.toggled1 && (
          (count !== 0) && (
            <div>Text is not shown at all</div>
          )
      }
      <div style={{
        visibility: !showText.toggled1 ? 'hidden' : '' //   count !== 0 ? {} : { display: 'none' }
      }}
      >
        Text is not shown display none
      </div>
      {
        // showText && (<div>Text is shown</div> )
        // showText.toggled2
         false && (
         <div>Text is shown 2</div>
         )
      }
      {
         showText.toggled1 ? (
           <div>Text is toggled</div>
         ) : (
           <div>Text is untoggled</div>
         )
      }
      <button type="button" onClick={toggleSmth}>Toggle Me Gently</button>
      <div> {props.isRequesting ? 'Your data is loading' : ''} </div>
      <div> Page {pageIndex} {props.users.length} </div>
      <table>
        <tr>
          <td>Name</td>
          <td>EMail</td>
          <td>Company</td>
          <td>Salary</td>
          <td>Age</td>
          <td>City</td>
          <td>Country</td>
          <td>ZipCode</td>
          <td>Phone</td>
        </tr>
        {
         //
          !props.isRequesting && props.users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.salary}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td>{user.country}</td>
              <td>{user.zipCode}</td>
              <td>{user.phone}</td>
            </tr>
          ))
        }
      </table>
      <button
        type="button"
        onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => setPageIndex(pageIndex + 1)}
      >
        Next
      </button>
      <img src={`/tracker/${pageIndex}.gif`} alt="tracker" />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = (state) => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
