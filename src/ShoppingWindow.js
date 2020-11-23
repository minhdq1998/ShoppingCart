import {useState} from 'react'
import Nav from './Components/Nav'
import ItemsList from './Components/ItemsList'
import CartList from './Components/CartList'
import items from './static-data'


const ShoppingWindow = () => {
    
    const [activeTab, setActiveTab] = useState('items') 

    return <div className="container shopping-container">
        <div className="row">
            <Nav 
                activeTab={activeTab} 
                changeTab={(tab) => setActiveTab(tab) }
            />
        </div>
        <div className="row">
            {activeTab === 'items' ? 
                <ItemsList items={items} /> : 
                <CartList items={items}/>
            }
            
        </div>
    </div>
}

export default ShoppingWindow