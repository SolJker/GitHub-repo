import { IoIosStar } from "react-icons/io";

function SideBar(props) {

    const style = {color: '#FFB400', width: '20px', height: '20px'}

    return(
        <div className="side_bar">
            {props.emptyFill ? <p>Выберите репозитарий</p> : null}
            <div className="side_bar_container">
                <h1>{props.fill[0].name}</h1>
                <div className="side_bar_info">
                    <div className="side_bar_lang">{props.fill[0].language}</div>
                    <div className="side_bar_stars">
                        <IoIosStar style={style} className="star_icon" />
                        {props.fill[0].stargazers_count}
                    </div>
                </div>
                <ul className="topics">
                    {props.fill[0].topics.map(item => {
                        return(
                            <li className="topic_item">{item}</li>
                        )
                    })
                    }
                </ul>
                <div className="licence">
                    {props.fill[0].license === null ? <p>There is no license here</p> : <p>{props.fill[0].license.name}</p> }
                </div>
            </div>
        </div>
    )
}

export default SideBar