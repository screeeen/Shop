import { ADD_TO_CART } from './action-types/cart-actions'
import { ADD_QUANTITY } from './action-types/cart-actions'
import { SUB_QUANTITY } from './action-types/cart-actions'
import { REMOVE_ITEM } from './action-types/cart-actions'
import { ADD_SHIPPING } from './action-types/cart-actions'
import { SUB_SHIPPING } from './action-types/cart-actions'


export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}

export const substractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }

}

// export const addShipping = (id) => {
//   return {
//     type: ADD_SHIPPING,
//     id
//   }

// }
// export const substractShipping = (id) => {
//   return {
//     type: SUB_SHIPPING,
//     id
//   }

// }
