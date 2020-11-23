import logo from './../logo.svg'

const Name = ({name}) => <b>{name}</b>

const Description = ({desc}) => <div>{desc}</div>

const Avatar = () => (
    <img className="item-logo" src={logo} alt="itemlogo" />
)

const Price = ({price}) => (<div>${price}</div>)

const ItemInfo = ({item}) => (
    <>
        <div className="avatar-block">
            <Avatar />
        </div>
        <div className="info-block">
            <Name name={item.name} />
            <Description desc={item.description} />
        </div>
    </>
)

const Item = ({ item, childAction }) => (
    <div className="item row">
        <div className="col-sm-8">
            <ItemInfo item={item}/>
        </div>
        <div className="col-sm-4">
            <Price price={item.price} />
            {childAction}
        </div>
    </div>
)

export default Item