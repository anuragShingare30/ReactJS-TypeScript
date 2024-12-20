import React, { useState } from "react";

/**
    @title Calling useState with excess properties
    * Here, we have declared the return type for arrow function
    * preventing the excess propertie in useState hook
 */


interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

export const UseStateExcess = ():React.ReactElement => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState((currentState):TagState => ({
                ...currentState,
                tagSelected:tag.id,
                tags:[]
              }));
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState((currentState):TagState => ({
            ...currentState,
            tagSelected:1,
            tags: [
              ...currentState.tags,
              {
                id: new Date().getTime(),
                value: "New",
              },
            ],
          }));
        }}
      >
        Add Tag
      </button>
    </div>
  );
};
