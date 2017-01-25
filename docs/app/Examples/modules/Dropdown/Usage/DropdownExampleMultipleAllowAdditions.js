import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const items = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
]

class DropdownExampleAllowAdditions extends Component {
  state = { items }

  handleAddition = (e, { value }) => {
    this.setState({
      items: [{ key: value, text: value, value }, ...this.state.items],
    })
  }

  handleChange = (e, { value }) => this.setState({ currentValues: value })

  render() {
    const { currentValues } = this.state

    return (
      <Dropdown
        items={this.state.items}
        placeholder='Choose Languages'
        search
        selection
        fluid
        multiple
        allowAdditions
        value={currentValues}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    )
  }
}

export default DropdownExampleAllowAdditions
