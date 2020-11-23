

const Nav = ({activeTab, changeTab}) => {

    const styleByActive = (tab) => (
        tab === activeTab ? 
        'nav-tab-item active':
        'nav-tab-item')

    return <div className="nav">
        <span className={styleByActive('items')} onClick={() => changeTab('items')}>Items</span>
        <span className={styleByActive('cart')} onClick={() => changeTab('cart')}>Cart</span>
    </div>
}

export default Nav