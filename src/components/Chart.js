import React from 'react'
import { Container, Alert } from 'reactstrap'
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';

const Chart = () => {
    const data1 = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];
      const data2 = [
        {x: 0, y: 6},
        {x: 1, y: 9},
        {x: 2, y: 8},
        {x: 3, y: 1},
        {x: 4, y: 5},
        {x: 5, y: 2},
        {x: 6, y: 3},
        {x: 7, y: 6},
        {x: 8, y: 2},
        {x: 9, y: 9}
      ];
    return (
        <Container>
            <h1>Tenant's Chart</h1>
            <hr />
            <Alert color="primary">This page is under construction.</Alert>
            <XYPlot height={500} width={1000}>
                <LineSeries data={data1} />
                <LineSeries data={data2} />
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
            </XYPlot>
        </Container>
            
    )
}

export default Chart;