import { IoIosStar } from "react-icons/io";

function SideBar(props) {
    return(
        <div className="side_bar">
            {props.emptyFill ? <p>Выберите репозитарий</p> : null}
            <div className="side_bar_container">
                <h1>{props.fill[0].name}</h1>
                <div className="side_bar_info">
                    <div>{props.fill[0].language}</div>
                    <div>
                        <IoIosStar className="star_icon" />
                        {props.fill[0].stargazers_count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar