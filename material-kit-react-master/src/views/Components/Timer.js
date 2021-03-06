import React, {Component} from 'react'; 
import PropTypes from 'prop-types'; 

class Timer extends Component
{
    constructor(props)
    {
        super(props); 

        this.state = 
        {
            days: 0, 
            hours: 0, 
            min: 0,
            sec: 0,
        }
    }

    componentDidMount()
    {
        this.interval = setInterval(() => {
            const date = this.calculateTimer(this.props.date); 
            date ? this.setState(date) : this.stop(); 
        }, 1000); 
    }

    componentWillUnmount()
    {
        this.stop(); 
    }

    calculateTimer(end)
    {
        let d = (Date.parse(new Date(end)) - Date.parse(new Date())) / 1000; 

        if(d <= 0)
        {
            return false; 
        }

        const timeLeft = {
            years:0,
            days: 0,
            hours: 0, 
            min: 0,
            sec: 0
        };

        if(d >= (365.25 * 86400))
        {
            timeLeft.years = Math.floor(d / (365.25 * 86400)); 
            d = d - timeLeft.years * 365.25 * 86400; 
        }

        if(d >= 86400)
        {
            timeLeft.days = Math.floor(d / 86400); 
            d = d - timeLeft.days * 86400; 
        }
        if(d >= 3600)
        {
            timeLeft.hours = Math.floor(d / 3600); 
            d = d - timeLeft.hours * 3600; 
        }
        if(d >= (60 * 4))
        {
            timeLeft.min = Math.floor(d / 60); 
            d = d - timeLeft.min * 60; 
        }
        timeLeft.sec = d; 

        return timeLeft; 
    }

    stop()
    {
        clearInterval(this.interval); 
    }

    addingZeros(v)
    {
        v = String(v); 
        while(v.length < 2)
        {
            v = '0' + v; 
        }
        return v; 
    }

    render()
    {
        const counter = this.state; 
       
        return (
            <div className = "timer">
                <span className="timer-col">
                    <span className = "timer-col-element">
                        <strong>{this.addingZeros(counter.days)}</strong>
                        <span>{counter.days === 1 ? ' Day ' : ' Days '}</span>
                    </span>
                </span>

                <span className = "timer-col">
                    <span className = "timer-col-element">
                        <strong>{this.addingZeros(counter.hours)}</strong>
                        <span> Hours </span>
                    </span>
                </span>

                <span className = "timer-col">
                    <span className = "timer-col-element">
                        <strong>{this.addingZeros(counter.min)}</strong>
                        <span> Min </span>
                    </span>
                </span>

                <span className = "timer-col">
                    <span className = "timer-col-element">
                        <strong>{this.addingZeros(counter.sec)}</strong>
                        <span> Sec </span>
                    </span>
                </span>
            </div>
        );
    }
}

Timer.propTypes = {
    date: PropTypes.string.isRequired
}; 

Timer.defaultProps = {
    date: new Date()
}; 

export default Timer; 