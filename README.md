# SimpleMap-IonicArcGIS

Simple page to show information about a TV SHOW.
## Requirements

- Node.js
## Libs

- ReactJS
- Styled Components
- Redux
- Redux Thunk
- React Redux
- React Loading 

## Installation

1. Run command on the root folder

```bash
$  yarn install 
```
## Running

To run the app

```bash
$  yarn start
```

![Page](https://user-images.githubusercontent.com/44411176/107170494-38e23f00-699f-11eb-9a47-bd7c8cac419d.png)  

![Page Mobile](https://user-images.githubusercontent.com/44411176/107170494-38e23f00-699f-11eb-9a47-bd7c8cac419d.png)  

## Code Snippets

 1. Using Styled Components
  
  ```javascript
  ```

 2. Using React Redux
   
    2.1. Creating store 

    ```javascript
        import { compose, createStore, applyMiddleware } from "redux";
        import thunk from "redux-thunk";
        import rootReducer from "../reducers";

            ...
            //Passing middleware and reducers
            const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
            ...
    ```
    2.2 Action

    ```javascript
        import { getEpisodes } from '../api';

        //Defining types
        export const GET_EPISODES_REQUEST = "GET_EPISODES_REQUEST";
        export const GET_EPISODES_SUCCESS = "GET_EPISODES_SUCCESS";
        export const GET_EPISODES_ERROR = "GET_EPISODES_ERROR"

        //Calling api inside redux action
        export const fetchEpisodes = () => async(dispatch) => {
            await dispatch({ type: GET_EPISODES_REQUEST, isLoadingEpisodes: false });
            try {
                const response = await getEpisodes();
                return dispatch({
                    type: GET_EPISODES_SUCCESS,
                    episodes: response.data,
                });
            } catch (err) {
                return dispatch({ type: GET_EPISODES_ERROR, err });
            }
        };
        ...
    ```

    2.3 Reducer 

    ```javascript
    //Defining inital state
       const INITIAL_STATE = {
            isLoadingEpisodes: true,
            episodes: [],
            errorData: [],
            error: false
        }

        //Manipulate state with a reducer by types 
        export const episodesReducer = (state = INITIAL_STATE, action) => {
            switch (action.type) {
                case 'GET_EPISODES_REQUEST':
                    console.log(action)
                    return {
                        ...state,
                        isLoadingEpisodes: true,
                    };
                case 'GET_EPISODES_SUCCESS':
                    console.log(action)
                    const { episodes } = action;

                    return {
                        ...state,
                        isLoadingEpisodes: false,
                        episodes: episodes,
                    };
                case 'GET_EPISODES_ERROR':
                    console.log(action)
                    return {
                        ...state,
                        errorData: action.data,
                        error: true
                    };
                default:
                    return state;
            }

        }
    ```
      

 3. Using React Loading 

 ```javascript
    import { TouchBallLoading } from 'react-loadingg';
     ...
     //Defining color and size of loadingg 
        <TouchBallLoading color={"green"} size={"large"} />
     ...
  ```

## License
[MIT](https://choosealicense.com/licenses/mit/)

