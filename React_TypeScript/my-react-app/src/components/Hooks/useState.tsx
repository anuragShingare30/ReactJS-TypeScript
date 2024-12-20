import React from 'react'

// By this method we can pass useState hook an types or interface

interface Tag {
    id: number;
    value: string;
}

interface Data{
    id:string;
    name:string;
}

export const UseState = () => {
    const [tags, setTags] = React.useState<Tag[]>([]);
    const [data,setData] = React.useState<Data>();

    return (
        <div>
            {tags.map((tag) => {
                return <div key={tag.id}>{tag.value}</div>;
            })}
            <h1 id={data?.id}>{data?.name}</h1>
            <button
                className='border border-black p-1'
                onClick={() => {
                    setTags([
                        ...tags,
                        {
                            id: new Date().getTime(),
                            value: 'New',
                        },
                    ]);
                }}
            >
                Add Tag
            </button>

            <button
                className='border border-black p-1'
                onClick={()=>{
                    setData({
                        id:"1",
                        name:"anurag"
                    })
                }}
            >
                Add data
            </button>
        </div>
    );
};