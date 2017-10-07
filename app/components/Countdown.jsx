var React = require ('react');
var Clock = require ('Clock');
var CountdownForm = require ('CountdownForm');

var Countdown = React.createClass ({

    getInitialState: function () {
        return {
        count : 0,
        countdownStatus: 'stopped' // the state of the countdown wether it is started or paused or stopped
        };
    },

    componentDidUpdate: function (prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) { // matches if the new countdown status which updates every second is still equal to the previous countdown status or not
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },

    startTimer: function () {
        this.timer = setInterval(() => { // set the interval 
            var newCount = this.state.count -1;  // calculate the new count
            this.setState({
                count: newCount >=0 ? newCount: 0 // set the new state // it also checks if the 'newCount' is less than 0 or not !, if not then it keeps on running but if it is than it sets newCount: 0
            })
        }, 1000);  // provided the time it requires 
    },


    handleSetCountdown: function (seconds) {
        this.setState ({
            count: seconds,
            countdownStatus: 'started' // countdown status is started
        });
    },

    render: function () {
        var {count} = this.state;

        return (
            <div>
                <Clock totalSeconds = {count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        )
    }
});

module.exports = Countdown;
