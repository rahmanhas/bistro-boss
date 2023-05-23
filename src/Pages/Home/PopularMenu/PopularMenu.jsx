import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems= data.filter(item=>item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <section className='mb-12'>
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                {menu.map(item=><MenuItem
                key={item.id}
                item={item}
                ></MenuItem>)}
            </div>
            
        </section>
    );
};

export default PopularMenu;