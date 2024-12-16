

// always ensure if props are present they should defined 
// either we can use interface or types

interface propsType {
    value:string;
    method:string;
}

export type Props = {
    value:string;
    methdo:string;
}

export const PropsTypes = (props:propsType) => {
  return (
    <div>
      <h1>{props.value}</h1>
      <h1>{props.method}</h1>
    </div>
  )
}

