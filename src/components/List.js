import { useState } from "react"
import SideBar from "./SideBar"

function List(props) {

    const [fill, setFill] = useState({})
    const emptyFill = !Object.keys(fill).length

    const fillItems = (id) => {
        setFill(props.data.items.filter(item => item.id === id))
    }

    return(
        <>
        <div className="lists_container">
                <h1>Результат поиска</h1>
                <ul className="lists_header">
                    <li><strong>Название</strong></li>
                    <li><strong>Язык</strong></li>
                    <li><strong>Число форков</strong></li>
                    <li><strong>Число звезд</strong></li>
                    <li><strong>Дата обновления</strong></li>
                </ul>
                <div className="lists">
                {props.data.items.map((item, index) => {
                     return(
                        <ul onClick={() => fillItems(item.id)} key={index} id={item.id}>
                            <li className="list_item">
                                {item.name}
                            </li>
                            <li className="list_item">
                                {item.language}
                            </li>
                            <li className="list_item">
                                {item.forks_count}
                            </li>
                            <li className="list_item">
                                {item.stargazers_count}
                            </li>
                            <li className="list_item">
                                {item.updated_at}
                            </li>
                        </ul>
                    )
                })}
                </div>
            </div>
            {emptyFill ? null : (<SideBar fill={fill} emptyFill={emptyFill} />)}
           
        </>
    )
}

export  default List