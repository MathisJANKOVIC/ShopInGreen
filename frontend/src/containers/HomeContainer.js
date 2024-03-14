import React, { useEffect, useState } from 'react';
import { callApi } from '../services/api';
import NavBar from '../components/NavBar';
import GridListProduct from '../components/GridListProduct';


function HomeContainer(){   

    const [listProduct, setListProduct] = useState(null);
    const token = localStorage.getItem('token');


    useEffect(() => {
        async function fetchListProduct() {
            try {
                const response = await callApi('http://localhost:3000/product', 'GET', null, token);
                const data = await response;
                console.log('Success:', data); // Vérifiez les données pour vous assurer qu'elles sont correctes
                setListProduct(data); // Mettez à jour uniquement les données de l'utilisateur
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchListProduct();
    }, []);


    return (
        <div>
            <NavBar />
            {listProduct && (
                <GridListProduct listProduct={listProduct}/> 
            )}
        </div>
    );

}

export default HomeContainer;