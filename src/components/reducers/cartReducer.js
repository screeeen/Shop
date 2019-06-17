import Item1 from './../././../images/stickerFaceBuffalo.png'
import Item2 from './../././../images/stickerFaceCocodrilo.png'
import Item3 from './../././../images/stickerFaceGato.png'
import Item4 from './../././../images/stickerFaceLibelula.png'
import Item5 from './../././../images/stickerFaceLoro.png'
import Item6 from './../././../images/stickerFaceOso.png'
import Item7 from './../././../images/stickerFacePato.png'
import Item8 from './../././../images/stickerFacePeixe.png'
import Item9 from './../././../images/stickerFacePinguino.png'
import { ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY, REMOVE_ITEM,ADD_SHIPPING,SUB_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
  items: [
    { id: 1, title: "Kolleguen", desc: "ed heel. Skate key cab flip opposite footed hurricane body varial ho-ho impossible. Tic-tac regular footed smith grind pressure flip steps ollie north Hard Corps nose grab. Slam sketchy regular footed Jason Lee heel flip nosegrind boned out 540.grind", price: 110, img: Item1 },
    { id: 2, title: "Goring", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item2 },
    { id: 3, title: "Supadupa", desc: "offin no comply nollie heel flip. Soul skate roll-in quarter pipe ollie. Body varial nosegrind hang ten rail Stacy Peralta. Gap varial coping grab. Switc", price: 110, img: Item3 },
    { id: 4, title: "brasas", desc: "drop bluntslide grind", price: 110, img: Item4 },
    { id: 5, title: "Pelos", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item5 },
    { id: 6, title: "Moretti", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. lob air. Independent steps birdie wax hand rail coper nose blunt hard flip. Venice crail grab birdie flail full pipe cess slide kickturn slap maxwell. Frigid air regular foote tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item6 },
    { id: 7, title: "vacacions", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item7 },
    { id: 8, title: "Rapas", desc: "Steve Caballero ollie  grind acid drop bluntslide grind", price: 110, img: Item8 },
    { id: 9, title: "Kolleguen", desc: "b Brooklyn Banks frontside air hard flip hang up. ", price: 110, img: Item9 }
  ],
  addedItems: [],
  total: 0
}


const cartReducer = (state = initState, action) => {

  if (action.type === ADD_TO_CART) {
    console.log("action: ", action.id);
    let addedItem = state.items.find(item => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    }
    else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
    }
  }

  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal
    }
  }

  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal
      }
    }
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => item.id === action.id)
    let new_items = state.addedItmes.filter(item => action.id !== item.id)

    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total - 6 //6 is price shipping
    }
  }

  if (action.type === SUB_SHIPPING) {
    return {
      ...state,
      total: state.total - 6 ////6 is price shipping
    }
  }




return state

}


export default cartReducer

