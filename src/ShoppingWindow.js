import {useState, useEffect} from 'react'
import Nav from './Components/Nav'
import ItemsList from './Components/ItemsList'
import CartList from './Components/CartList'
import static_items from './static-data'


const ShoppingWindow = () => {
    
    const [activeTab, setActiveTab] = useState('items') 
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        const new_items = static_items.map(item => ({
            ...item,
            addedToCart: false
        }))
        setItems(new_items)
    } ,[setItems])

    const addItemToCart = (index) => {
        let tmp_items = [...items]
        tmp_items[index].addedToCart = true
        let tmp_item = {...tmp_items[index]}
        tmp_item.number = 1
        setItems(tmp_items)
        setCart([...cart, tmp_item])
    }

    const increaseItem = (index) => {
        let tmp_cart = [...cart]
        tmp_cart[index].number += 1
        setCart([...tmp_cart])
    }

    const decreaseItem = (index) => {
        let tmp_cart = [...cart]
        let tmp_items = [...items]
        if (cart[index].number <= 1) {
            for (let i = 0; i< tmp_items.length; i++) {
                if (tmp_items[i].id === cart[index].id) {
                    tmp_items[i].addedToCart = false
                }
            }
            tmp_cart = cart.filter(( _ ,item_pos) => item_pos !== index)
        } else {
            tmp_cart[index].number -= 1
        }
        setItems(tmp_items)
        setCart([...tmp_cart])
    }

    console.log(items)
    return <div className="container shopping-container">
        <div className="row">
            <Nav 
                activeTab={activeTab} 
                changeTab={(tab) => setActiveTab(tab) }
            />
        </div>
        <div className="row">
            {activeTab === 'items' ? 
                <ItemsList items={items} addToCart={addItemToCart} /> : 
                <CartList items={cart} increaseItem={increaseItem} decreaseItem={decreaseItem} />
            }    
        </div>
    </div>
}

export default ShoppingWindow