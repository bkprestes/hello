import React, {Component} from 'react';
import HomeCard from '../ui/HomeCard';

export default class Home extends Component{

    homeCardRelease = {
        title: 'Releases',
        text: 'Manage Releases',
        button: 'Click Me',
        action: () => alert('Releases Clicked')
    }

    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        button: 'Click Me',
        action: () => alert('Backlog Clicked')
    }

    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        button: 'Click Me',
        action: () => alert('Sprints Clicked')
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