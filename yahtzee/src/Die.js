import React, { Component } from "react";
import "./Die.css";

<i className="fas fa-dice-six" />;

class Die extends Component {
  static defaultProps = {
    number: ["one", "two", "three", "four", "five", "six"],
    val: 5
  };
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { number, locked, val, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${number[val - 1]} fa-5x  `;
    if (locked) classes += "Die-locked ";
    if (rolling) classes += "Die-rolling ";
    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled}>
        {/* {this.props.val} */}
      </i>
    );
  }
}

export default Die;
// onClick = { e => this.props.handleClick(this.props.idx) }
