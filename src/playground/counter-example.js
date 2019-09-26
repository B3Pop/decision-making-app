class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            theCount: 0
        };
    }

componentDidMount() {
        const stringCount = localStorage.getItem('theCount');
        const theCount = parseInt(stringCount, 10);
        
        if (!isNaN(theCount)) {
            this.setState(() => ({ theCount }))
        }
}
componentDidUpdate(prevProps, prevState) {
    if (prevState.theCount !== this.state.theCount) {
        localStorage.setItem('theCount', this.state.theCount);
    }
}
    handleAddOne() {
        this.setState((prevState) => {
            return {
                theCount: prevState.theCount +1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                theCount: prevState.theCount -1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                theCount: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.theCount}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     theCount: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));

// let theCount = 0;
// const addOne = () => {
//     theCount++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     theCount--;
//     renderCounterApp();
// }
// const reset = () => {
//     theCount = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {theCount}</h1>
//             <button onClick = {addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();