const { REHYDRATE } = require('redux-persist')
const { put, takeLatest, delay } = require('redux-saga/effects')
const { layoutActions } = require('../slices/layoutSlice')

function* retoreCompleted() {
  try {
    yield delay(500)
    yield put(layoutActions.retoreCompleted())
  } catch { }
}

export default function* layoutSaga() {
  yield takeLatest(REHYDRATE, retoreCompleted)
}
