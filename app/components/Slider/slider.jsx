import React from 'react'
import Swiper from 'swiper';
import 'swiper/css';

export default function Slider() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
    });
    return (
        <Swiper></Swiper>
    )
}
