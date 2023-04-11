import React from 'react';
import Header from '../Header/Header';


const Blog = () => {
    
    return (
        <>
            <Header></Header>
            <div className=' mx-auto container mt-8 '
             ><div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  When should you use context API?
  </div>
  <div className="collapse-content">
    <p>Passing data to multiple levels ,when there is a situation of need to pass data to many levels of nested components, it can become difficult  to pass down the props manually to each level. In this case, using the Context API can simplify the process and make the code more maintainable</p>
  </div>
</div>






 <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is a custom hook?
  </div>
  <div className="collapse-content">
    <p>A custom hook is a function in React that allows us to reuse stateful logic between different components. Custom hooks follow the naming convention of starting with the word use, just like the built-in hooks such as useState and useEffect.Custom hooks allow us to extract and reuse logic in a way that makes our code more modular and easier to maintain. By creating our own hooks, we can also create abstractions that are specific to our application's needs, making our code more expressive and easier to understand.</p>
  </div>
</div>
 
 
 <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is useRef?
  </div>
  <div className="collapse-content">
    <p>useRef is a hook in React that provides a way to create a mutable reference to a DOM element or a value that persists across component renders.Unlike state or props, changes to the useRef value will not trigger a re-render of the component. Instead,we can use the .current property of the returned object to access the current value of the ref.Overall, useRef is a powerful tool in React that allows us to reference and persist values across component renders, and manipulate DOM elements directly.</p>
  </div>
</div>
 <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is useMemo?
  </div>
  <div className="collapse-content">
       <p>useMemo is a React hook that is used for memoizing the result of a function. It's used to optimize the performance of a React component by caching the expensive computation of a function so that it's only recomputed when the inputs to the function change.</p>

  </div>
</div>




</div>
           
            



        </>
    );
};

export default Blog;