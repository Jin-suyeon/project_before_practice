import { ADD_TO_CART } from "../actions";
import furnitureList from "../assets/furnitureList";

const itemReducer = (state = furnitureList, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return;
  }
};
