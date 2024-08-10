import React from 'react'
import rasm1 from '../assets/rasm1.png'
import rasm2 from '../assets/rasm2.png'
import rasm3 from '../assets/rasm3.png'
import rasm4 from '../assets/rasm4.png'
import rasm5 from '../assets/rasm5.png'
import rasm6 from '../assets/rasm6.png'
import rasm7 from '../assets/rasm7.png'
import rasm9 from '../assets/rasm9.png'
import rasm10 from '../assets/rasm10.png'
import { FaArrowRightLong } from "react-icons/fa6";

const data = [
    {
        id: 1,
        url: rasm1,
        title: "Диваны",
    },
    {
        id: 2,
        url: rasm2,
        title: "Спальная",
    },
    {
        id: 13,
        url: rasm3,
        title: "Кухня",
    },
    {
        id: 4,
        url: rasm4,
        title: "Для сада",
    },
    {
        id: 5,
        url: rasm5,
        title: "Мебель",
    },
    {
        id: 6,
        url: rasm6,
        title: "Гигиена",
    },
    {
        id: 7,
        url: rasm10,
        title: "Товары для отдыха",
    },
    {
        id: 8,
        url: rasm7,
        title: "Зеркала",
    },
    {
        id: 9,
        url: rasm1,
        title: "шкаф",
    },
    {
        id: 10,
        url: rasm9,
        title: "Кухня и бытовая тех..",
    }

]


const Category = () => {

    const CategoryCard = data?.map((el) => (
        <div key={el.id} className="w-[240px] flex gap-[10px] flex-col items-center">
            <div className=''>
                <img src={el.url} alt="" />
            </div>
            <p className='text-[18px] font-bold'>{el.title}</p>
        </div>
    ))

    return (
        <>
            <div className="container">
            <div id='Category' className='flex  items-end mb-8'>
                        <h2 className='font-extrabold text-4xl mr-3'>Популярные категории</h2>
                        <p className='font-bold flex items-center justify-center gap-2'>Все категории <FaArrowRightLong /></p>
                    </div>
                <div className='flex flex-wrap justify-center gap-5 mt-[61px] mb-[100px]'>{CategoryCard}</div>
            </div>
        </>
    )
}

export default Category