var expect = require ('expect');
var React = require ('react');
var ReactDOM = require ('react-dom');
var TestUtils = require ('react-addons-test-utils');
var $ = require ('jQuery');
// Loading the CountdownForm to inherit the properties
var CountdownForm = require ('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', ()=> {
        expect(CountdownForm).toExist(); // expects the variable to exist
    });

    it('should call onSetCountdown if valid seconds entered', ()=> {
        var spy = expect.createSpy(); // created a Spy
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value='109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should call not call onSetCountdown if invalid seconds entered', ()=> {
        var spy = expect.createSpy(); // created a Spy
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value='109b';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});