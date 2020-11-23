import Item from './Item'

const AddToCartButton = ({addToCart}) => (
    <button onClick={addToCart}>Add To Cart</button>
)

const AdddedToCartButton = () => (
    <button className="addedToCardButton" disable="true" >Added To Cart</button>
)

const ItemLists = ( {items, addToCart} ) => (
    <div className="items-list">Item Lists{ 
        items.map((item, index) => 
        <Item key={item.id} item={item}>
            { item.addedToCart ?
                <AdddedToCartButton />:    
                <AddToCartButton addToCart={() => addToCart(index)}/>
            }
        </Item>)
    }</div>
)

export default ItemLists