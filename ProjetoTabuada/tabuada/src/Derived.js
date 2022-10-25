import React from 'react';

class App extends React.Component {

render() {

	return (
	<div>
	<Child name = "getDerivedStateFromProps()"></Child>
	</div>
	)
}
}

class Child extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		name: "kapil"
		};
	}
	static getDerivedStateFromProps(props, state) {
		if(props.name !== state.name){
			//Change in props
			return{
				name: props.name
			};
		}
		return null; // No change to state
	}
	/* if props changes then after getDerivedStateFromProps
	method, state will look something like

	{
		name: props.name
	}
	*/
	render(){
	return (
		<div> isso é:   {this.state.name }</div>
	)
	}
}
					
export default App;
