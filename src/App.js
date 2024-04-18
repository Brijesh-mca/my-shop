import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './css/bootstrap.min.css';
import './App.css';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import { NotificationManager, NotificationContainer } from 'react-notifications';


const App = () => {
  let [finalcat, setFinalcat] = useState([])
  let [finalpro, setFinalpro] = useState([])
  let [status, setStatus] = useState(false);
  let [catName, setcatname] = useState('');

  let getCatagory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalRes) => {

        setFinalcat(finalRes)
      })
  }

  let productdetails = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalpro) => {
        setFinalpro(finalpro.products)


      })
  }


  useEffect(() => {
    getCatagory();

    productdetails();
  }, [])
  useEffect(() => {

    axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((res) => res.data)
      .then((finalpro) => {
        setFinalpro(finalpro.products)


      })

  }, [catName])


  return (
    <>




      <div className={`nav mygrad ${status ? 'activeNav' : ''}`}>
        <span className='mynav ' onClick={() => { setStatus(!status) }}>&times;</span>
        <ul>
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact-Us</li>
          <li>Trending</li>
        </ul>

      </div>
      <div className='container '>

        <div className="row">
          <div className="mypage">

            <ul>
              <li>
                <Link className='mytext' to='/'>Home</Link>
              </li>
              <li>
                <Link className='mytext' to='/Contact'>Contact-us</Link>
              </li>
              <li>
                <Link className='mytext' to='/About'>About-us</Link>
              </li>
              <li>
                <Link className='mytext' to='/Nav'>Navigation</Link>
              </li>
            </ul>



          </div>

         


        </div>
        <h4 className='text-center bg-info  p-2 m-2 textfont'><marquee behavior="" direction="">Our-Product</marquee></h4>
        <div className="row">

          <div className="col-3">
            <h4 className='text-center bg-dark bd-gradient text-white m-5 p-1'>Catagory</h4>

            <div className='mt-5 catagory' >
              <ul >

                {finalcat.map((value, i) => {
                  return (
                    <>
                      <li className='mb-3 mycat' key={i} onClick={() => { setcatname(value) }} > <strong>{value} </strong> </li>
                    </>
                  )
                })}


              </ul>
            </div>
          </div>

          <div className="col-9">
            <h4 className='text-center bg-dark bd-gradient text-white m-5 p-1'>Items</h4>
            <div className="items mt row"  >

              {finalpro.map((v, i) => {

                return (
                  <>
                    <div className="col mr-2 mycol" key={i}>
                      <img src={v.thumbnail} alt="" className='imgsize text-center' />
                      <h5 className=' p-2 text-center text-dark '>{v.title}</h5>

                      <h6 className='bg-info p-2 text-center text-dark mb- myprice'><strong>$ {v.price}</strong> </h6>

                      <h6 className='bg-info p-2 text-center text-dark mb-5 myprice' onClick={() => { NotificationManager.success('Item Added to Cart') }}><strong>Add to Cart</strong> </h6>
                      <NotificationContainer />
                    </div>

                  </>

                )
              })}






            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App