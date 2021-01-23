import  React, { Component } from 'react';
import {
    Segment, Button, Header, Divider, Form, Dimmer, Loader,
} from 'semantic-ui-react';
import { XYChart, LineSeries, CrossHair, XAxis, YAxis, LinearGradient } from '@data-ui/xy-chart';
import {toast} from 'react-toastify';
import randomColor from 'randomcolor';
import generate from '../Sorts/index';
import os from 'os';
import './styles.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {},
            loading: false,
            limit: undefined,
            slot: undefined,
            graphData: [],
            generate: false,
            legend: [],
        };
    }

    selectedAlgo = (algo) => {
        const { selected } = this.state;
        selected[algo] = !selected[algo];
        this.setState({ selected });
    }

    limitChangeHandler = (e) => {
        if (isNaN(e.target.value)) return null;
        return this.setState({ limit: e.target.value });
    }

    slotHandler = (e) => {
        const { limit } = this.state;
        // if (e.target.value > limit) return toast.dark('Slots cannot be greater than limit');
        if (isNaN(e.target.value)) return null;
        return this.setState({ slot: e.target.value });
    }

    generateGraph = () => {
        const { selected, limit, slot, graphData } = this.state;
        if (!Object.keys(selected).length) return toast.dark('Please select >=1 Algorithms');
        if (!limit || !slot) return toast.dark('Please enter Limit and elements per slot');
        this.setState({ loading: true, graphData: [] });
        this.setState({ generate: true });
        const legend = [];
        const returnedData = generate(selected, limit, slot);
        Object.keys(selected).forEach((algo) => {
            const data = returnedData[algo];
            if (data && data.length) {
                const color = randomColor()
                const graphTemplate = (<LineSeries
                    key={randomColor()}
                    stroke={color}
                    data={data} fill="url('#my_fancy_gradient')"
                    seriesKey={algo}
                    />);
                graphData.push(graphTemplate);
                legend.push({ algo, color });
            }
        });
        this.setState({ loading: false, graphData, legend, generate: false });
    }



    render() {
        const { selected,loading, limit, slot, graphData, generate } = this.state;

        const graph = () => {
            const { legend } = this.state;
            const legendTemplate = () => legend.map((record) => {
                return (
                    <div className="legend">
                     {record.algo.toUpperCase()}
                     <br />
                     <text style={{ color: record.color }} className="legend-color">
                    ------
                     </text>
                    </div>
                );
            })
            return (
                <React.Fragment>
                <Segment className="legends">
                {legendTemplate()}
                </Segment>
                <XYChart
                    ariaLabel="Run Time"
                    width={1000}
                    height={400}
                    margin={{ left: 100 }}
                    xScale={{ type: 'time' }}
                    yScale={{ type: 'linear' }}
                    renderTooltip={({ event, datum, data, color }) => (
                        <div>
                        <strong style={{ color }}>{datum.label}</strong>
                        <div>
                            <strong>x </strong>
                            {datum.x}
                        </div>
                        <div>
                            <strong>y </strong>
                            {datum.y}
                        </div>
                        </div>
                    )}
                    snapTooltipToDataX
                    >
                    <LinearGradient id="my_fancy_gradient" />
                    <XAxis label="Elements (x1000)" />
                    <YAxis label="Time (ms)" />
                    {graphData.length ? graphData : null}
                    <CrossHair showVerticalLine={true} showHorizontalLine={false} fullHeight stroke="pink" />
                </XYChart>
                </React.Fragment>
            );
        }

        const selectMenu = (
            <Segment raised className="segmentContainer">
                <Header as="h3" className="header">
                Select one or more Algorithms</Header>
                <Divider />
                <div className="flex-props">
                <div className="item">
                <Button size="large" basic={!selected['bubble']} primary onClick={() => { this.selectedAlgo('bubble') }}>
                    Bubble
                    </Button>
                </div>
                <div className="item">
                <Button size="large" basic primary basic={!selected['insertion']} onClick={() => { this.selectedAlgo('insertion') }}>
                    Insertion
                    </Button>
                </div>
                    <div className="item">
                    <Button size="large" basic primary basic={!selected['selection']} onClick={() => { this.selectedAlgo('selection') }}>
                    Selection
                        </Button>
                    </div>
                    <div className="item">
                    <Button size="large" basic primary basic={!selected['quick']} onClick={() => { this.selectedAlgo('quick') }}>
                    Quick
                        </Button>
                    </div>
                    <div className="item">
                    <Button size="large" basic primary basic={!selected['merge']} onClick={() => { this.selectedAlgo('merge') }}>
                    Merge
                        </Button>
                    </div>
                    <div className="item">
                    <Button size="large" basic primary basic={!selected['heap']} onClick={() => { this.selectedAlgo('heap') }}>
                    Heap
                        </Button>
                    </div>
                    <div className="item">
                    <Button size="large" basic primary basic={!selected['radix']}  onClick={() => { this.selectedAlgo('radix') }}>
                    Radix
                        </Button>
                    </div>
                    <div className="item">
                    <Button size="large" basic primary basic={!selected['counting']} onClick={() => { this.selectedAlgo('counting') }}>
                    Counting
                        </Button>
                    </div>
                    <div className="item">
                    <Button size="large" basic primary basic={!selected['bucket']} onClick={() => { this.selectedAlgo('bucket') }}>
                    Bucket
                        </Button>
                    </div>
                </div>
                </Segment>
        );

        const graphContainer = () => {
            return (
                <Segment className="segmentContainer">
                <Header as="h3" className="header-graph">
                Graph Parameters</Header>
                <Divider />
                <Header as="h5" className="header-graph">
                Enter Limit</Header>
                <Form.Input
                 placeholder="Limit"
                 onChange={this.limitChangeHandler}
                 value={limit}
                />
                <Divider />
                <Header as="h5" className="header-graph">
                Increase Elements per slot (X-axis)</Header>
                <Form.Input
                 placeholder="Slot"
                 onChange={this.slotHandler}
                 value={slot}
                />
                <Divider />
                <Button loading={loading || generate} size="mini" secondary onClick={this.generateGraph}>
                    Generate
                </Button>
                <Divider />
                </Segment>
            );
        }

        return (
            <React.Fragment>
            <Dimmer active={generate}>
                <Loader active>
                 Generating...
                </Loader>
            </Dimmer>
            <div className="main-container">
                {selectMenu}
                {graphContainer()}
            </div>
            <Segment className="graphContainer">
                {graph()}
                </Segment>
            </React.Fragment>

        );
    }
}

export default Home;