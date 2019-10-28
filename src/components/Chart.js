import React, { Component } from 'react'
import { Container, Alert } from 'reactstrap'
import '../../node_modules/react-vis/dist/style.css'; // go back two directories to access module in the root folder
import {
    XYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries } from 'react-vis';

class Chart extends Component {
    render () {
        const data = [ // don't hardcode the data
            {x: 'Mall A', y: 10},
            {x: 'Mall B', y: 5},
            {x: 'Mall C', y: 15},
            {x: 'Mall D', y: 20}
        ];
        const data2 = [
            {x: 'Mall A', y: 5},
            {x: 'Mall B', y: 10},
            {x: 'Mall C', y: 5},
            {x: 'Mall D', y: 15}
        ];
        const data3 = [
            {x: 'Mall A', y: 15},
            {x: 'Mall B', y: 5},
            {x: 'Mall C', y: 20},
            {x: 'Mall D', y: 10}
        ];
        return (
            <Container>
                <h1>Tenant's Chart</h1>
                <hr />
                <Alert color="primary">This page is under construction.</Alert>
                <XYPlot xType="ordinal" width={1000} height={500}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis />
                    <YAxis title="Points"/>
                    <VerticalBarSeries data={data} />
                    <VerticalBarSeries data={data2} />
                    <VerticalBarSeries data={data3} />
                </XYPlot>
            </Container>
        )
    }
}

export default Chart