import Item1 from './../././../images/stickerFaceBuffalo.png'
import Item2 from './../././../images/stickerFaceCocodrilo.png'
import Item3 from './../././../images/stickerFaceGato.png'
import Item4 from './../././../images/stickerFaceLibelula.png'
import Item5 from './../././../images/stickerFaceLoro.png'
import Item6 from './../././../images/stickerFaceOso.png'
import Item7 from './../././../images/stickerFacePato.png'
import Item8 from './../././../images/stickerFacePeixe.png'
import Item9 from './../././../images/stickerFacePinguino.png'
import { ADD_TO_CART} from '../actions/action-types/cart-actions'


const initState = {
  items: [
    { id: 1, title: "Kolleguen", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item1 },
    { id: 2, title: "Kolleguen", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item2 },
    { id: 3, title: "Kolleguen", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item3 },
    { id: 4, title: "Kolleguen", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item4 },
    { id: 5, title: "Kolleguen", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item5 },
    { id: 6, title: "Kolleguen", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item6 },
    { id: 7, title: "Kolleguen", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item7 },
    { id: 8, title: "Kolleguen", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item8 },
    { id: 9, title: "Kolleguen", desc: "Skate ipsum dolor sit amet, durometer steps birdie finger flip half-flip noseblunt slide ledge. Steve Caballero ollie hole transition tailslide crooked grind acid drop bluntslide grind", price: 110, img: Item9 }
  ],
  addedItems: [],
  total: 0
}


const cartReducer = (state = initState, action) => {

  if (action.type === ADD_TO_CART) {
    console.log("action: ",action.id);
    let addedItem = state.items.find(item => item.id === action.id)
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
  return state

}


export default cartReducer