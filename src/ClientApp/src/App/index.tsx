import * as React from 'react';

class Box extends React.Component<{}, {count: number}> {
    state = {
       count: 0,
    }
    render() {
        //console.log(hello);
        return (
            <div onClick={()=> this.handleClick(this.state.count)}>{this.state.count}</div>
        )
    }
    handleClick(count:number) {
        this.setState({
            count: count+2,
        })
    }
}

export default Box;