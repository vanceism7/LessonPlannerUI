import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer, { IRootState } from "./redux/root";

const initialState: IRootState = {
  ScheduleState: { ActivityClicked: null },
  ScheduleProps: { Activities: [], TimeIncrement: 60 }
}

const store = createStore( rootReducer, initialState )

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'))

registerServiceWorker()
