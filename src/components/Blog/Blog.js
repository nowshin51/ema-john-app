import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container'>
            <div className='blogs'>
                <h3>How does react work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly
                    to JavaScript functions as they accept arbitrary inputs called properties or props.
                    It's possible to have as many components as necessary without cluttering your code.
                </p>
            </div>    
                <div className='blogs'>
                    <h3>Difference between props and state</h3>
                    <p>Props passed The Data from one component to another.State passed The Data within the component only.
                        Props is Immutable (cannot be modified).	State is Mutable ( can be modified).
                        Props can be used with state and functional components.	State can be used only with the state components/class component (Before 16.0).
                        Props are read-only.	State is both read and write.</p>
                </div>
                <div className='blogs'>
                    <h3>Where we use useEffect ?</h3>
                    <p>useEffect use cases<br></br>
                        Running once on mount: fetch API data<br></br>
                        Running on state change: validating input field<br></br>
                        Running on state change: live filtering<br></br>
                        Running on state change: trigger animation on new array value<br></br>
                        Running on props change: update paragraph list on fetched API data update<br></br>
                        Running on props change: updating fetched API data to get BTC updated price</p>
                </div>
               
        </div>
    );
};

export default Blog;