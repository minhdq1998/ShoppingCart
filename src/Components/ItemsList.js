import Item from './Item'

const ItemLists = ( {items} ) => (
    <div className="items-list">Item Lists{ items.map(item => <Item key={item.id} item={item} />) }</div>
)

export default ItemLists