import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import { AppActionsType, appReducer } from './app-reducer'

const rootReducer = combineReducers({
	app: appReducer,
})

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(mySaga)

// чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store

//types
//тип всего стейта
export type AppRootStateType = ReturnType<typeof rootReducer>
//тип всех экшенов из всех редьюсеров
export type AppRootActionsType = AppActionsType
