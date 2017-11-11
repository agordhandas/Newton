import React, { Component } from 'react';

class Card extends Component {
  renderFooter() {
    return (
      this.props.footer ?
        <div className="panel-footer" style={styles.footerStyle}>{this.props.footer}</div>
        : null
    )
  }

	render() {
		return (  			
          <div className="panel panel-default" style={styles.panel}>
            <div style={styles.cardContainer}>
              <h3 className="panel-title" style={styles.panelTitle}>{this.props.title}</h3>
              <div style={styles.subTitleStyle}>{this.props.subtitle}</div>
              <div style={styles.panelBody}>{this.props.body}</div>
            </div>
            {this.renderFooter()}
          </div>
		)
	}
}

const styles = {
  panel: {
    width: "300px",
    height: "auto",
    margin: 20
  },
  panelTitle: {
    paddingBottom: 0,
    fontSize: "large"
  },
  panelBody: {
    marginTop: 5
  },
  subTitleStyle: {
    color: 'grey'
  },
  footerStyle: {
    marginLeft: "none",
    backgroundImage: "none", 
    backgroundColor:"white",
    color: "grey",
    fontSize: "small"
  },
  cardContainer: {
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10
  }
}

export default Card