import React from 'react';
import axios from 'axios';

export default class Container extends React.Component {
    state = {
        allJobs : [],
        favJobs : []
    }

    /*componentDidMount() {
        axios.get(`https://jobs.github.com/positions.json?description=python&location=new+york`,
            {
            headers: {
                'Authorization' : '',
                'Content-Type' : 'application/json'
                }
            })
            .then(res => {
                const jobs = res.data;
                this.setState({ allJobs: jobs });
        })
    }*/
    render(){
        return(<h4>{this.state.allJobs}</h4>)
    }
}