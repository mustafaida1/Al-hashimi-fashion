import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import { getPathLoc } from '../../redux/user/user.selectors'
import { getDiscount } from '../../redux/shop/shop.selectors'
import { addItemToCart } from '../../redux/cart/cart.actions'
import { getShopItems } from '../../redux/shop/shop.selectors'
import { getCurrentUser } from '../../redux/user/user.selectors'

import './description.css'

class Description extends React.Component {
	
	render () {
	
   
	
	const { imageUrl, name, price, description } = this.props.path;
	const dis = price / 10;
	const discount = !this.props.hiddent ? price : price - dis;

	return !this.props.path ? <Redirect to="/"/>: (<div className="container">
	<section className="ftco-section">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 mb-5 ftco-animate">
				<a href={imageUrl} className="image-popup prod-img-bg" target="_blank"><img src={imageUrl} className="img-fluid" alt="Colorlib Template"/></a>
			</div>
			<div className="col-lg-6 product-details pl-md-5 ftco-animate">
<h3>{name}</h3>
				<div className="rating d-flex">
						<p className="text-left mr-4">
							<a href="#" className="mr-2">4.0</a>
							<span className="fa fa-star text-primary"></span>
							<span className="fa fa-star text-primary"></span>
							<span className="fa fa-star text-primary"></span>
							<span className="fa fa-star text-primary"></span>
							<span className="fa fa-star text-primary"></span>
						</p>
						
						</div>
						<p className="text-left">
							<a href="#" className="mr-2" style={{"color": "#000"}}><span style={{"color": "#000", "fontSize":"27px"}}>${discount}</span></a>
						</p>

						<div className="row mt-4">
						<div className="col-md-12">
							<div className="form-group d-flex">
				  <div className="select-wrap">
				  {/* <div className="icon"><span className="ion-ios-arrow-down"></span></div> */}
				  <select name="" id="" className="form-control">
					  <option value="Small">Small</option>
					<option value="Medium">Medium</option>
					<option value="Large">Large</option>
					<option value="Extra Large">Extra Large</option>
				  </select>
				</div>
				</div>
						</div>
						<div className="w-100"></div>
						<div className="input-group col-md-6 d-flex mb-3">
				 
			  
		  </div>
		  
			</div>

						<p><a href="#" className="btn btn-primary py-3 px-5"
							onClick={() => {if(!this.props.hiddent) {
								this.props.path.price = discount;
							} return this.props.dispatch(addItemToCart(this.props.path))}}
						>Add to cart</a></p>
					</div>

					<p className="des">{description}</p>
					
		</div>




		<div className="row mt-5">
	  <div className="col-md-12 nav-link-wrap">
		<div className="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
		  

		  <a className="nav-link ftco-animate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Reviews</a>

		</div>
	  </div>
	  
	</div>
	</div>
</section>







<section className="text-center">
<div id="reviews" role="tabpanel" className="tab-pane active">
		<div className="row">
		  <div className="col-xl-9">
			<div className="row review">
			  <div className="col-3 text-center"><img src="https://d19m59y37dris4.cloudfront.net/hub/1-4-3/img/person-1.jpg" alt="Han Solo" className="review-image"/><span className="text-uppercase text-muted text-small">Dec 2018</span></div>
			  <div className="col-9 review-text">
				<h6>Han Solo</h6>
				<div className="mb-2"><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i>
				</div>
				<p className="text-muted text-small">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
			  </div>
			</div>
			<div className="row review">
			  <div className="col-3 text-center"><img src="https://d19m59y37dris4.cloudfront.net/hub/1-4-3/img/person-2.jpg" alt="Luke Skywalker" className="review-image"/><span className="text-uppercase text-muted text-small">Dec 2018</span></div>
			  <div className="col-9 review-text">
				<h6>Luke Skywalker</h6>
				<div className="mb-2"><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star-o text-primary"></i>
				</div>
				<p className="text-muted text-small">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. It wasn't a dream.</p>
			  </div>
			</div>
		   
			<div className="row review">
			  <div className="col-3 text-center"><img src="https://d19m59y37dris4.cloudfront.net/hub/1-4-3/img/person-4.jpg" alt="Jabba Hut" className="review-image"/><span className="text-uppercase text-muted text-small">Dec 2018</span></div>
			  <div className="col-9 review-text">
				<h6>Jabba Hut</h6>
				<div className="mb-2"><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i>
				</div>
				<p className="text-muted text-small">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
			  </div>
			</div>
		  </div>
		</div>
		<form>
<div class="form-group">
<label for="exampleFormControlInput1">Email address</label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<div class="form-group">

<input type="radio" id="male" name="gender" value="1"/>
<i className="fa fa-star text-primary"></i>
<input type="radio" id="female" name="gender" value="2"/>
<i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i>
<input type="radio" id="other" name="gender" value="3"/>
<i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i>
<input type="radio" id="other" name="gender" value="4"/>
<i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i> <i className="fa fa-star text-primary"></i> <i className="fa fa-star text-primary"></i>
<input type="radio" id="other" name="gender" value="5"/>
<i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i><i className="fa fa-star text-primary"></i> <i className="fa fa-star text-primary"></i>
</div>
<div class="form-group">
<label for="exampleFormControlTextarea1">Message</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</form>

	  </div>
</section>

</div>

) 
}
}

const mapStateToProps = state => ({
	path: getPathLoc(state),
	items: getShopItems(state),
	currentUser: getCurrentUser(state),
	hiddent: getDiscount(state)
})

export default connect(mapStateToProps)(Description)