// ! ini untuk inisiasi store kita

import { legacy_createStore as createStore } from "redux"
import counterReducer from "./counterReducer"

const store = createStore(counterReducer)

export default store