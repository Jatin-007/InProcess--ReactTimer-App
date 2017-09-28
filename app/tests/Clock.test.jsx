var React = require ('react');
var ReactDOM = require ('react-dom');
var expect = require('expect');
var $ = require ('jQuery');
var TestUtils = require ('react-addons-test-utils');

var Clock = require ('Clock'); // This will help load the component to see if it exists and works properly or no

// Describe helps you group your test and name that group !!
describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe ('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            var $el = $(ReactDOM.findDOMNode(clock));

            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');

        });
    });

    describe ('formatSeconds', () => {
        it('should format Seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            // inheriting the function using the above statements
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);

        }); 

        it('should format Seconds when min/sec are less than 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            // inheriting the function using the above statements
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);

        }); 
    });
});