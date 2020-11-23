import Item from './Item'

const CartList = ({items}) => (
    <div className="items-list">Cart Lists{ 
        items.map(item => (
        <Item key={item.id} item={item}></Item>
    )) }</div>
)

export default CartList