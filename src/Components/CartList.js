import Item from './Item'

const ManipulateNumber = ({item, increaseItem, decreaseItem}) => (
    <div>
        <button onClick={decreaseItem}>-</button>
        {item.number}
        <button onClick={increaseItem}>+</button>
    </div>
)

const CartList = ({items, increaseItem, decreaseItem}) => (
    <div className="items-list">Cart Lists{ 
        items.map((item, index) => (
        <Item key={item.id} item={item}>
            <ManipulateNumber 
                item={item} 
                increaseItem={() => increaseItem(index)} 
                decreaseItem={() => decreaseItem(index)} />
        </Item>
    )) }</div>
)

export default CartList