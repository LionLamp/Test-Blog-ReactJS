import logo from './logo.svg';
import React, {Component} from 'react';

import Blogitem from './BlogCard';
import { isArrayEmpty } from './Utils';

import './App.css';

class App extends Component{
  state ={
    showBlogs : true,

    // Creating Blog Array
  blogArr : [
   
    {
      id:1,
      title: 'ShadLabs',
      description: 'This blog contains all my technical scripts and tutorials',
      likeCount: 0,
      },
    {
      id: 2,  
      title: 'Firebase',
        description: 'This blog contains all my technical scripts and tutorials',
        likeCount: 0,
      },
    {
      id:3,
      title: 'ReactJS',
      description: 'This blog contains all my technical scripts and tutorials',
      likeCount: 0,
      },
    {
      id:4,
      title: 'YouTube',
      description: 'This blog contains all my technical scripts and tutorials',
      likeCount: 0,
      }
  ]
}
  

  onlikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({blogArr: updatedBlogList});

    //console.log(updatedBlogObj);
  } 


  /* Creating the Blog Object
  const blogObj = {
    title: 'ShadLabs',
    description: 'This blog contains all my technical scripts and tutorials'
    } */


/*Creating variables
// You can directly make changes to your data in the declared variables
  const firstName = 'Shadrack';
  const lastName = 'Odametey';
  const age = 30;
  const job = 'Frontend Developer';

// Code for accessing objects and array (to access the array use this code {mArr[0]s} in the div tag)
  const mArr = [1, 2, 3, 4]  
  const mObj = {
    name: 'Shadrack',
    age: 20
//To access the object use this code {mObj.age} in the paragraph containing the Age    
  }
//Taking input using the placeholder
  const inputPlaceholder = 'Enter your Details'  

//Creating Functions
  const getFullname = (firstName, lastName) => `${firstName} ${lastName}`
  
// Storing JSX in Variables
  const detailsInputBox = <input placeholder={inputPlaceholder}
  autoComplete="true"/>;
  
  return (
   // <div className="App">
    // <h3>My Full Name: Shadrack Odametey</h3>
    // <p>Age: 30</p>
    // <p>Job: Frontend Developer</p>
   //</div>

// Use this method to display output when using variables
// <div className="App">
// <h3>My Full Name: {firstName} {lastName} </h3>
// <p>Age: {age}</p>
// <p>Job: {job}</p>

// </div>

//Use this method to display output when using functions
//From the input tag that is the code for Adding an input field or text box to collect data from user
  //<div className="App">
  //<h3>My Full Name: {getFullname(firstName, lastName)}</h3>
  //<p>Age: {age}</p>
  //<p>Job: {job}</p>

  //{detailsInputBox}

  </div>*/

//Using a Blog card

/*return (

<div className="App">
  <div className="BlogCard">

    <h3>{blogObj.title}</h3>
    <p>{blogObj.description}</p>
  </div>
  
  <div className="BlogCard">
    <h3>{blogObj.title}</h3>
    <p>{blogObj.description}</p>
  </div>
 
  <div className="BlogCard">
    <h3>{blogObj.title}</h3>
    <p>{blogObj.description}</p>
  </div> */

   onHideBtnClick = () => {
   // let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });

    console.log(this.showBlogs);
  }

  render() {
    console.log('Render Called');
    console.log(this.state);

    // Using Map for the Array
    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      console.log(item);  
  
      return(
        <Blogitem className={'Blog'} key={pos} title={item.title} description=
        {item.description} likeCount={item.likeCount} id={item.id} onlikeBtnClick=
        {() => this.onlikeBtnClick(pos)} />
      //<div className="BlogCard" key={item.id}>
        //<h3>{item.title}</h3>
        //<p>{item.description}</p>
        //</div>
    
      )
    })

    return(
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide Blogs' : 'Show Blogs'}</button>
        <br></br>
        {
          this.state.showBlogs ? blogCards : null
        }

      </div>  

    );
  }
}

export default App;
