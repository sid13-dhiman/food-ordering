import React from 'react'
import '../css/style.css';
import { Link } from 'react-router-dom'; // Import Link for routing

const Home = () => {
  const restaurants = [
    {
      name: 'Sarovar Portico',
      image: 'https://img.directhotels.com/in/palampur/rs-sarovar-portico/1.jpg',
    },
    {
      name: 'Radisson Blu',
      image: 'https://cdn1.goibibo.com/voy_ing/t_g/55cab1743bcb11ed99fb0a58a9feac02.jpg',
    },
    {
      name: 'La Plage',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLg9W4J7pzBG4hZDdCrdZjAP1Si0RSzMnUg&usqp=CAU',
    },
    {
      name: 'Sienna store and Cafe',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa8UZ1iAm5lDikCWPvkcV-ZJQabsjH897H_A&usqp=CAU',
    },
    {
      name: 'Americano',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdwsU4QEDhOH2zeytFv45okJR9xlYYK1LqxQ&usqp=CAU',
    },
    {
      name: 'Palms and Sand Beach',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTonbyYOcOjpTlThXxbalngkHi9k6LKPjNyvg&usqp=CAU',
    },
  ];

  return (
    <>
      <div className="bg-box">
        <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
          alt="" />
      </div>

      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="col-sm-6 col-lg-4" style={{ marginTop: '15px' }}>
                <div className="card position-relative">
                  <div className="card-img-container">
                    <img src={restaurant.image} alt={restaurant.name} className="card-img-top" style={{ height: '225px' }} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <Link to={`/order/${restaurant.name}`} className="btn btn-danger position-absolute bottom-0 end-0"
                      style={{ marginBottom: '15px', marginRight: '5px' }}>
                      Order Now
                    </Link>
                    <Link to={`/categories/${restaurant.name}`} className="btn btn-primary position-absolute top-0 end-0">
                      View Categories
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --about section -- */}

      <section className="about_section layout_padding">
        <div className="container  ">

          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="https://themewagon.github.io/feane/images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>
                    We Are Food Ordering
                  </h2>
                </div>
                <p>
                  A food ordering website is a digital platform that allows users to browse, select, and order a wide variety of culinary options from local restaurants
                  and eateries. With a user-friendly interface, customers can explore menus, customize their orders,
                  and make secure payments online. These websites often offer features like real-time order tracking, reviews,
                  and ratings to help users make informed choices. They provide convenience and efficiency by facilitating food delivery or pickup,
                  making it easy for customers to enjoy their favorite dishes without leaving the comfort of their homes.
                  Food ordering websites enhance the dining experience by providing a seamless and appetizing online solution.
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- footer section -- */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <div className="footer_contact">
                <h4>
                  Contact Us
                </h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Call +01 1234567890
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                      demo@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="footer_detail">
                <a href="" className="footer-logo">
                  Food Ordering
                </a>
                <p>
                  Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                </p>
                <div className="footer_social">
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h4>
                Opening Hours
              </h4>
              <p>
                Everyday
              </p>
              <p>
                10.00 Am -10.00 Pm
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
