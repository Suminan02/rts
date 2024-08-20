import { Component, ReactNode } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users:User[]
  

}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch extends Component<UserSearchProps>{
  state= {
    name:'',
    user:undefined,
  };

  onClick=() => {
    const foundUser = this.props.users.find((user)=>{
      return user.name===this.state.name;
  });

  this.setState({user:foundUser});


  this.render=()=>{
    const {name, user} = this.state;
    return(
      <div>
    User Search
    <input value={this.state.name} onChange={(e)=>this.setState ({name: e.target.value})} />
    <button onClick={this.onClick}>Find User</button>
    <div>
      {user && user.name}
      {user && user.age}
    </div>
    </div>
    );

  }

}

export defualt UserSearch;
