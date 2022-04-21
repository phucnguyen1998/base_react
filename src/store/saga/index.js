import { all } from 'redux-saga/effects'
import layoutSaga from './layoutSaga'

export default function* saga() {
  yield all([layoutSaga()])
}
