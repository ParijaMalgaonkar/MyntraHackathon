import React, { Component } from 'react'

export default class slotButton extends Component {

    constructor(props) {
        super(props); {
            this.state {
                airtable: null
            }
        }
    }

    render() {
        if(this.props.brandName === "adidas")
            window.open('https://airtable.com/embed/shrA8wWONCgok6Mie?');
        



        return (
            <div>

            </div>
        )
    }
}
