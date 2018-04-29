import React, { Component } from 'react';


class ErrorBoundry extends Component{
    state = {
        hasError: false,
        error: null,
        errorInfo: null
    }
    componentDidCatch(error, errorInfo){
        this.setState({ 
            hasError: true,
            error,
            errorInfo
        })
    }
    render(){
        if(this.state.hasError){
            console.log("error found")
            return <span>Opps!! Seen some Error</span>
            

        }
        return(
            <div>{this.props.children}</div>
        )
    }
}

export default ErrorBoundry;