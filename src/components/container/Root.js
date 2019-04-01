import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../presentational/App';
import { simpleAction } from '../../store/actions/simpleAction';

const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
   })


export default connect(mapStateToProps, mapDispatchToProps)(App);