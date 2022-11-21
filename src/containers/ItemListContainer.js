import React, { useEffect, useState } from 'react';
import { customFetch } from '../utils/customFetch';
import { products } from '../utils/products';
import ItemList from '../components/ItemList'
// import ItemDetail from '../components/ItemDetail';
import {useParams} from 'react-router-dom'
import { db } from '../utils/firebaseConfig';
import { collection, collectionGroup, getDocs } from "firebase/firestore"; 

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()


    useEffect(()=>{
        const firebaseFetch = async() => {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        }
        firebaseFetch()
        // console.log('useEffect!')
    }, [categoryId])


    // if (categoryId === undefined) {
    //     customFetch(2000, products)
    //     .then(result => setProductos(result))
    //     .catch(err => console.log(err))
    // } else {
    //     customFetch(2000, products.filter(item => item.category_name === categoryId))
    //     .then(result => setProductos(result))
    //     .catch(err => console.log(err))
    // }

    return (
        <div className='content'>
            <ItemList key={productos.id} items={productos}></ItemList>
        </div>

        
    );
};

export default ItemListContainer;