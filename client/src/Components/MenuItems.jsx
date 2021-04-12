import React from "react"
import Button from '@material-ui/core/Button';


export default class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.abortController = new AbortController();
    this.onNavSelect = this.onNavSelect.bind(this);
  }

  onNavSelect(name) {
    // Call the function that we were passed. This allows us to update App.js's state.
    this.props.onNavSelect(name);
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() {
    let menu_items = [];

    if (this.props.items) {
      for (const name of this.props.items) {
        const test_id = `header-${name}`;

        if (this.props.active === name) {
          // If the menu item is active
          menu_items.push(
            
            <Button key={name}
              data-testid={test_id}
              className="uppercase"
              color="inherit"
              style={{ color: "white", marginRight: '50px' }}
              title={name}
              onClick={(e) => { this.onNavSelect(name) }}
            >
              {name}
            </Button>
       
          )
        } else {
          // If the menu item isn't active
          menu_items.push(
            
            <Button key={name}
              data-testid={test_id}
              color="inherit"
              style={{ color: "white", marginRight: '50px' }}
              className="uppercase"
              title={name}
              onClick={(e) => { this.onNavSelect(name) }}
            >
              {name}
            </Button>
   

          )
        }
      }
    }

    return (
      <div style={{display: "flex", justifyContent: "center", marginTop: "47px"}}>
        {menu_items}
      </div>
    );
  }
}

