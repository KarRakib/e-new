import React, { createContext, useEffect, useState } from 'react';
import data from '../../public/data';
import axios from 'axios';
export const CrateProductContext = createContext();
const ProductContext = ({children}) => {
const user = {email:'kar'}

  const [productData, setProductData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);

  const [isLogin, setIsLogin] = useState();
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  console.log(totalPrice);


  useEffect(() => {
    // getData('http://localhost:5000/productData');
    // getCartData("http://localhost:5000/cartItems");

    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);

   
      setTimeout(() => {
        setProductData(data[1]);
        setIsloading(false);
      }, 3000);


  
  }, []);

  const getData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        setProductData(response.data);
        setTimeout(()=>{
          setIsloading(false);
        },2000); 
      })


      await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=27dad2d0abd34a22965727ce8d939077').then((response) => {
          console.log(response)
      })



    } catch (error) {
      console.log(error.message);
    }
  }

  const getCartData = async (url) => {
    try {
      await axios.get(url).then((response) => {
        setCartItems(response.data);
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  const addToCart = async (item, quantity) => {
    console.log('1', quantity);
    // item.quantity = 1;
    console.log('from context',item);
console.log(user.email);

    if(user?.email){
      const alreadyAdded = cartItems.find(cart=> cart.id === item.id );
      console.log('Al', alreadyAdded);
      setTotalPrice((prvTotal)=>{
        return prvTotal + parseInt(item.price)*item.quantity
      });
      setTotalQuantity(prevQuantity => prevQuantity + quantity)
      if(alreadyAdded){
        const updateCartItems = cartItems.map(cartProduct=>{
          if(cartProduct.id == item.id )return{
            ...cartProduct,
            quantity:cartProduct.quantity + quantity
          }
        })
        setCartItems(updateCartItems)
      }
      else{
        item.quantity = quantity;
        setCartItems([... cartItems,{
          ...item
        }])
      }
      console.log('2',quantity, totalQuantity);

    }

    // try {
    //   await axios.post("http://localhost:5000/cartItems", item).then((res) => {
    //     if (res !== undefined) {
    //       setCartItems([...cartItems, { ...item, quantity: 1 }])
    //     }
    //   })
    // } catch (error) {
    //   console.log(error)
    // }

  }

  const removeItemsFromCart = (id) => {
    const arr = cartItems.filter((obj) => obj.id !== id);
    setCartItems(arr)
  }

  const emptyCart = () => {
    setCartItems([])
  }


  const signIn = () => {
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
  }


  const signOut = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  }


  const openFilters=()=>{
    setIsOpenFilters(!isOpenFilters)
  }

  const value = {
    cartItems,
    isLogin,
    windowWidth,
    isOpenFilters,
    addToCart,
    removeItemsFromCart,
    emptyCart,
    signOut,
    signIn,
    openFilters,
    isOpenNavigation,
    setIsOpenNavigation
  }
    return (
        <CrateProductContext.Provider value={value}>
            {children}
        </CrateProductContext.Provider>
    );
};

export default ProductContext;