import React from 'react';
import './App.scss';

const TimeController = (props) => {
  return (
    <div>
      <div id="main-title">Pomodoro Clock</div>
      <div id="buttons">
        <div id='break'>
          <p>Break Length</p>
          <div id="break-label">
            <div className='container-buttons' onClick={props.incrementBreak}>
              <i id="break-increment" className='fa fa-arrow-up fa-2x'></i>
            </div>
            <div id="break-length">{props.break}</div>
            <div className='container-buttons' onClick={props.decrementBreak}>
              <i id="break-decrement" className="fa fa-arrow-down fa-2x"></i>
            </div>
          </div>
        </div>
        <div id="session">
          <p>Session Length</p>
          <div id="session-label">
            <div className='container-buttons' onClick={props.incrementSession}>
              <i id="session-increment" className='fa fa-arrow-up fa-2x'></i>
            </div>
            <div id="session-length">{props.session}</div>
            <div className='container-buttons' onClick={props.decrementSession}>
              <i id="session-decrement" className="fa fa-arrow-down fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const PlayPauseReset = (props) => {
  return (
        <div id="play-reset">
          <div id='start-pause' onClick={props.default? props.sessionOperation: props.breakOperation}>
            <i id="start_stop" className={props.start? 'fa fa-pause fa-2x': 'fa fa-play fa-2x'}></i>
          </div>
          <div id="restart" onClick={props.reset}>
            <i id="reset" className='fa fa-refresh fa-2x'></i>
          </div>
        </div>
  )
}
const DisplayComponent = (props) => {
  return (
    <div id='display'>
      <div id="timer-label">{props.text}</div>
      <div id="time-left">{props.display}</div>
    </div>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sessionStart: false,
      breakStart: false,
      session: 25,
      break: 5,
      default: true,
      sessionTimer: 1500,
      breakTimer: 300,
      start: false
    }

    this.warning = this.warning.bind(this);
    this.alarm = this.alarm.bind(this);
    this.minuteSeconds = this.minuteSeconds.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.sessionOperation = this.sessionOperation.bind(this);
    this.breakOperation = this.breakOperation.bind(this);
    this.reset = this.reset.bind(this);
  }
  warning () {
    
  }
  alarm () {
      this.audioBeep.play();
  }
  minuteSeconds (sec){
    let minutes = Math.floor(sec / 60);
    let seconds = sec % 60;
    minutes = minutes < 10? '0'+ minutes: minutes;
    seconds = seconds < 10? '0'+ seconds: seconds;
    return `${minutes}:${seconds}`;
  }
  incrementBreak(){
    if (!this.state.start && this.state.break < 60) {
      this.setState({
        break: this.state.break + 1,
        breakTimer: this.state.breakTimer + 60
      });
    }
  }
  decrementBreak(){
    if (!this.state.start && this.state.break > 1) {
      this.setState({
        break: this.state.break - 1,
        breakTimer: this.state.breakTimer - 60
      });
    }
  }
  incrementSession(){
    if (!this.state.start && this.state.session < 60) {
      this.setState({
        session: this.state.session + 1,
        sessionTimer: this.state.sessionTimer + 60
      });
    }
  }
  decrementSession(){
    if (!this.state.start && this.state.session > 1 ) {
      this.setState({
        session: this.state.session - 1,
        sessionTimer: this.state.sessionTimer - 60
      });
    }
  }
  reset () {
    this.setState({
      sessionStart: false,
      breakStart: false,
      session: 25,
      break: 5,
      default: true,
      sessionTimer: 25 * 60,
      breakTimer: 5 * 60,
      start: false
    });
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }
  sessionOperation(){
    this.setState({
      sessionStart: !this.state.sessionStart,
      start: !this.state.start
    });
    let time = setInterval( () => {
      if ( this.state.sessionStart ) {
        if ( this.state.sessionTimer === 0 ) {
          this.alarm();
          this.setState({ 
            default: false, 
            sessionStart: !this.state.sessionStart,
            sessionTimer: this.state.session * 60,
            start: !this.state.start
          });
          clearInterval(time);
          this.breakOperation();
        }
        else {
          this.setState({ sessionTimer: this.state.sessionTimer - 1 });
        }
      }
      else {
        clearInterval(time);
      }
    }, 1000);
  }
  breakOperation() {
    this.setState({
      breakStart: !this.state.breakStart,
      start: !this.state.start
    });
    let time = setInterval( () => {
      if ( this.state.breakStart ) {
        if ( this.state.breakTimer === 0 ) {
          this.alarm();
          this.setState({ 
            default: true, 
            breakStart: !this.state.breakStart,
            breakTimer: this.state.break * 60,
            start: !this.state.start
          });
          clearInterval(time);
          this.sessionOperation();
        } 
        else {
          this.setState({ breakTimer: this.state.breakTimer - 1 });
        }
      } 
      else {
        clearInterval(time);
      }
    }, 1000);
  }
  render () {
    let display = this.state.default? this.state.sessionTimer: this.state.breakTimer;
    return (
      <div id="pomodoro">
        <TimeController 
          incrementBreak={this.incrementBreak}
          decrementBreak={this.decrementBreak}
          incrementSession={this.incrementSession}
          decrementSession={this.decrementSession}
          break={this.state.break}
          session={this.state.session}
        />
        <DisplayComponent 
          display={this.minuteSeconds(display)}
          text={this.state.default? 'Session': 'Break'}
        />
        <PlayPauseReset 
          default={this.state.default}
          sessionOperation={this.sessionOperation}
          breakOperation={this.breakOperation}
          start={this.state.start}
          reset={this.reset}
         />
        <audio id="beep" preload="auto" 
          src="https://goo.gl/65cBl1"
          ref={(audio) => { this.audioBeep = audio; }} />
      </div>
    )
  }
}

export default App;
