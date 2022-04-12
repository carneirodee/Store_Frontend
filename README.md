# Watchflix

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
## Screenshots

1. Main Page
<img width="1440" alt="Captura de Tela 2022-04-12 às 10 58 58" src="https://user-images.githubusercontent.com/44411176/162984484-507a254b-5064-42e0-9f86-5d7e2d311896.png">

2. Mobile Page 
<img width="329" alt="Captura de Tela 2022-04-12 às 11 01 27" src="https://user-images.githubusercontent.com/44411176/162984654-23be2134-fbe6-4fd1-a268-4ffdd7cd074a.png">



## Code Snippets

 1. Using Styled Components
  
  ```javascript
    import styled from "styled-components";

        const Container = styled.div`
            display: flex;
            flex-direction: column;
            flex: 1;
            height: 100vh;
            ${props => props.image ? `background-image:  radial-gradient(circle closest-corner at 40% 30%, rgba(0, 0, 0, 0.5) 10%, rgba(0,0,0, 1)  98%), 
            url(${props.image});` : `background-color: black`};
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center top;

            @media(max-width: 800px) {
                flex-direction: row;
                width: auto;
            }
        `;

        ...
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

