import React, { Component } from 'react';
import Card from './Card'
import Navbar from './Navbar'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={styles.container}>
        <Card title='asa' subtitle="assdasdasads" body="body" footer="footer"/>
        <Card title='asa'/>
        <Card title='asa'/>
        <Card title='asa'/>
        <Card title='asa'/>
        <Card title='asa'/>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
}

export default Dashboard;
