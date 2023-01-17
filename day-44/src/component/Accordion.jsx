import { Link } from 'react-router-dom'
import Panel from "./Panel"
import { Routes, Route } from "react-router-dom"
import HomePage from './HomePage'
export default function Accordion() {
    return (
        <div>
            <h2> Улаанбаатар, МОНГОЛ УЛС </h2>
            <Panel title='ТУХАЙ'>
                Улаанбаатар (ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ улаганбагатур, улаан-баа-тар) нь Монгол Улсын нийслэл бөгөөд Монгол улсын цорын ганц саятан хот юм.
                1992 оны шинэ нутаг дэвсгэрийн хуваариар үндсэн 6, дагуул 3, нийт 9 дүүрэгтэй, нутаг дэвсгэрийн хэмжээ 4,704.4 км2 газартай. 2021 оны эцсээр 1,649,172 хүн оршин сууж байна.
            </Panel>
            <Panel title='Этимологи'>
                Улаанбаатар хот Монгол Улсын төв хэсэгт хуучнаар Алтан тэвшийн хөндий, өнөөгийнхөөр Туул-Сэлбийн гол бэлчир хөндийд, далайн түвшнээс дээш 1300-1350 метр өндөрт Богд хан, Сонгино хайрхан, Чингэлтэй уул, Баянзүрх дөрвөн уулаар хүрээлэгдэн оршдог.
                1639 онд Ширээт цагаан нуурт Өндөр гэгээнийг залж орд өргөө боссоноор Улаанбаатар хотын өмнөх суурин байгуулагджээ. 1778 он хүртэл олон газар нүүдэллэж байгаад одоогийн байрлалдаа тогтсон. Өмнө нь шашин, худалдааны төв байсан бол 1911 оноос улсын нийслэл болж, XX зуунд барилгажиж, аж үйлдвэржиж, XXI зуунд их хотын төрх бүрдэж байна.
                Улаанбаатар Монгол Улсын улс төр, эдийн засаг, соёл, технологийн төв юм.
            </Panel>
            <Link to={'/'}>Back</Link>
        </div>
    )
}