import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class DeciderApp extends React.Component {
    state = {
        options: []
    };
    handleDeleteOptions = () => {
        this.setState(()=> ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handleDecision = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    };
    handleAddOption = (option) => {
        if(!option) {
            return 'Please enter an option to add.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch(e) {
            //Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('saving data');
            }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        const subTitle = 'Helping you make the right choices.';

        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleDecision={this.handleDecision}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

DeciderApp.defaultProps = {
    options: []
};