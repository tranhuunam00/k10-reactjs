import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getBySaga, getBySagaFail, getBySagaSuccess } from "./postsSlice";
import { client } from "../../api/client";

function* handleGetPost(action) {
  try {
    const response = yield call(() => client.get("/fakeApi/posts"));
    yield delay(2000);
    console.log(response);
    yield put(getBySagaSuccess());
  } catch (error) {
    console.log("errorsaga", error);
    yield put(getBySagaFail());
  }
}

export default function* postsSaga() {
  yield takeLatest(getBySaga.type, handleGetPost);
}
