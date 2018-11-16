import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import HomeCard from '../ui/HomeCard';

export default class Home extends Component{

    homeCardRelease = {
        title: 'Releases',
        text: 'Manage Releases',
        button: 'Click Me',
        action: () => hashHistory.push('/releases')
    }

    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        button: 'Click Me',
        action: () => hashHistory.push('/backlog')
    }

    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        button: 'Click Me',
        action: () => hashHistory.push('/sprints')
    }

    render(){
        return(
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardRelease.title}
                    text={this.homeCardRelease.text}
                    button={this.homeCardRelease.button}
                    action={this.homeCardRelease.action} />
                    <HomeCard {...this.homeCardBacklog} />
                    <HomeCard {...this.homeCardSprints} />
                </div>
            </div>
        );
    }
}