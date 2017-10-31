var expect = require ('expect');
var React = require ('react');
var ReactDOM = require ('react-dom');
var TestUtils = require ('react-addons-test-utils');
var $ = require ('jQuery');

var Timer = require ('Timer');

describe('Timer', ()=> {
    it('should exist', ()=> {
        expect(Timer).toExist();
    });

    it('should start timer on started status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.handleStatusChange('started');
        timer.setState({count: 5});

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(6);
        }, 1001)
    });

    it('should pause timer on paused status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 5}); // setting up the time 
        timer.handleStatusChange('started');    // setting the status!!!
        timer.handleStatusChange('paused');     // pausing it

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.status.count).toBe(5);
        },1001)
    });

    it('should stop timer on stopped status', () => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count:5});
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        setTimeout(()=> {
            expect(timer.status.timerStatus).toBe('stopped');
            expect(timer.status.count).toBe(0);
        }, 1001)
    });
});