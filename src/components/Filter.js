import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Product(s) found.</div>
                <div className="filter-sort">
                    Order by
                    <select value={this.props.size} onChange={this.props.sortProducts}>
                        <option hidden value="">Select</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
            </div>
        )
    }
}
