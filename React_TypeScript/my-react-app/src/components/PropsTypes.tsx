
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

export const PropsTypes = ({value,method}:propsType) => {
  return (
    <div>
      <h1>{value}</h1>
      <h1>{method}</h1>
    </div>
  )
}