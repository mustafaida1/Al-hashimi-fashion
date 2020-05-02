import React from 'react';
import {connect} from 'react-redux';

import { getPathLoc } from '../../redux/user/user.selectors';

import { addItemToCart } from '../../redux/cart/cart.actions';
import './modal.css'

const Modal = ({path})=> {
    
  console.log(path)
    const all = path.split(" ");
    const des = all.slice(4);
    return (
        <div class="modal fade" id="modalQuickView" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <div className="row">
          <div className="col-lg-5">
            
            <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails"
              data-ride="carousel">
             
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block w-100"
                    src={all[3]}
                    alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100"
                    src={all[3]}
                    alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100"
                    src={all[3]}
                    alt="Third slide"/>
                </div>
              </div>
              
              <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
             
              <ol className="carousel-indicators">
                <li data-target="#carousel-thumb" data-slide-to="0" class="active">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg" width="60"/>
                </li>
                <li data-target="#carousel-thumb" data-slide-to="1">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg" width="60"/>
                </li>
                <li data-target="#carousel-thumb" data-slide-to="2">
                  <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg" width="60"/>
                </li>
              </ol>
            </div>
            
          </div>
          <div className="col-lg-7">
            <h2 className="h2-responsive product-name">
    <strong>{`${all[0]} ${all[1]}`}</strong>
            </h2>
            <h4 className="h4-responsive">
              <span className="green-text">
    <strong>${all[2]}</strong>
              </span>
              
            </h4>

            
            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

              
              <div className="card">

                
                <div className="card-header" role="tab" id="headingOne1">
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                    aria-controls="collapseOne1">
                    <h5 className="mb-0">
                      Description <i class="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

               
                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                  data-parent="#accordionEx">
                  <div className="card-body">
                    {des}
                  </div>
                </div>

              </div>
             
              

            </div>
            


            
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">

                  <select className="md-form mdb-select colorful-select dropdown-primary">
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">White</option>
                    <option value="2">Black</option>
                    <option value="3">Pink</option>
                  </select>
                  <label>Select color</label>

                </div>
                <div className="col-md-6">

                  <select className="md-form mdb-select colorful-select dropdown-primary">
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">XS</option>
                    <option value="2">S</option>
                    <option value="3">L</option>
                  </select>
                  <label>Select size</label>

                </div>
              </div>
              <div className="text-center">

                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                {/* <button className="btn btn-primary" onClick={() => dispatch(addItemToCart(item))}>Add to cart
                  <i className="fas fa-cart-plus ml-2" aria-hidden="true"></i>
                </button> */}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )

    }


const mapStateToProps = state => ({
  path: getPathLoc(state)
})

export default connect(mapStateToProps)(Modal);