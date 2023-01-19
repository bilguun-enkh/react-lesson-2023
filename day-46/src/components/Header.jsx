export default function Header(props) {
    return (
        <div>
            <div className="ui menu">
                <div className="right menu">
                    <a className="item active">
                        <div className="ui simple dropdown item">
                            <i className="heart icon ">
                                {props.Wishlist.length}
                            </i>
                            <div className="menu">
                                {props.Wishlist.map((w, index) => {
                                    return (
                                        <div>
                                            <div className="item">{w.name}</div>
                                            <button
                                                className="ui button"
                                                onClick={() => {
                                                    props.setWishlist(
                                                        props.Wishlist.filter(
                                                            (wish) =>
                                                                wish.id !== w.id
                                                        )
                                                    )
                                                }}
                                            >
                                                <i className="close icon"> </i>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </a>
                    <a className="item">
                        <i className="shopping basket icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
