import React from 'react'


// Extracting all the props from a custom component to all components


// custom componenet

interface Props{
    title:string;
    posts:string[];
}

export const NavBar = ({title,posts}:Props) => {
  return (
    <div>
      {title}
      {posts}
    </div>
  )
}



// main app
// extracting all props of 'NavBar' component
type NavBarProps = React.ComponentProps<typeof NavBar>;

export const App = ({title,posts}:NavBarProps)=>{


    return (
        <div>
            {title}
            {posts}
        </div>
    );
}