import React from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import styles from './slider.module.css';

export default function Slider() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
    });
    return (
        <Swiper></Swiper>
    )
}
