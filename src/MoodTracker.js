import React, { Component } from 'react'

class MoodTracker extends Component {
    // what should happen when the component is first created
    constructor (props) {
        // make a call to the parent class's constructor
        super()
        this.state = {
            moodPoints: 1 // initial value of this.state.moodPoints will be 1
        }
        this.resetMood = this.resetMood.bind(this)
    }
    // state = {
    //     moodPoints: 1
    // }
    resetMood = function () {
        this.setState({
            moodPoints: 1
        })
    }

    increaseMood = () => {
        console.log('so much more mood')
        this.setState({
            moodPoints: this.state.moodPoints + 1
        })
    }

    // what the component should render
    render() {
        return (
            <section>
                <h3>MoodTracker</h3>
                <p>You are this happy: <span className='mood-points'>{this.state.moodPoints}</span></p>
                <button onClick={this.increaseMood}>Cheer up!</button>
                <button>Reset Mood</button>
            </section>
        )
    }
}

export default MoodTracker;