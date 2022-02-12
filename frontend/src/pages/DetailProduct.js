import React from 'react'
import { useParams } from "react-router-dom";
import {productPageProducts} from '../data';


const DetailProduct = () => {
    const {category, id} = useParams();
    const data = productPageProducts.find(item=>item.id===id);
  return (
    <div>{
        Object.keys(data).map(key=><h1 key={data[key]}>{data[key]}</h1>)
        }</div>
  )
}

export default DetailProduct