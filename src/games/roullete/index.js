/** @format */

import React from 'react';
import './dice.scss';
import  bitcoin_img from '../../images/btc.d61276e.svg';
import { useEffect } from 'react';

const Dice = () => {


	// const calc_slider = () => {
		// alert("okay")
	// }
	var multi_const = 0.03128;
	var throw_type = 0;

	useEffect(()=>{
		var slider = document.getElementById("myRange");
		var Rodar = document.getElementById("Rodar");
		var Voltear = document.getElementById("Voltear");
		
		if(slider.value<50){
			document.getElementById("slider_ball").style.left = slider.value*91.0/100 + 2 + "%";
			document.getElementById("slider_ball").style.right = "auto";
		}else{
			document.getElementById("slider_ball").style.left = "auto";
			document.getElementById("slider_ball").style.right = (100-slider.value)*91.0/100 + 2 + "%";
		}

		slider.oninput = function() {
		  document.getElementById("prediction_no").innerHTML = this.value;
		  document.getElementById("slider_ball").innerHTML = this.value;
		  if(this.value<50){
			document.getElementById("slider_ball").style.left = this.value*91.0/100 + 2 + "%";
			document.getElementById("slider_ball").style.right = "auto";
		  }else{
			document.getElementById("slider_ball").style.left = "auto";
			document.getElementById("slider_ball").style.right = (100-this.value)*91.0/100 + 2 + "%";
		  }



		  if(throw_type){
			  slider.style.background = "linear-gradient(to right, #2a7bdb 0%, #03172e "+this.value+"%, #d3a218 "+this.value+"%, #eb2626 100%)";
			  document.getElementById("Oportun").innerHTML = this.value + "%";
			  const  Multiplicador = this.value*multi_const;
			  document.getElementById("Multiplicador").innerHTML = "x"+Multiplicador.toFixed(4);
			}else{ 
				slider.style.background = "linear-gradient(to right, #d3a218 0%, #eb2626 "+slider.value+"%, #2a7bdb "+slider.value+"%, #03172e 100%)";
				document.getElementById("Oportun").innerHTML = 100-this.value + "%";
				const  Multiplicador = 5 - this.value*multi_const;
				document.getElementById("Multiplicador").innerHTML = "x"+Multiplicador.toFixed(4);
			}
		}

		Rodar.onclick = () => {
			if(throw_type === 0){
				throw_type = 1;
				set_throw_type();
			}
		}

		Voltear.onclick = () => {
			if(throw_type){
				throw_type = 0;
				set_throw_type();
			}
		}

		var min_but = document.getElementById("min_but");
		var max_but = document.getElementById("max_but");
		var divide = document.getElementById("divide");
		var multi = document.getElementById("multi");
		var temp_val1 = document.getElementById("temp_val1");
		var temp_val2 = document.getElementById("temp_val2");

		const min = 1/10000000;
		const max = 5561.86575;
		const price_index = 17.35/1000;

		if(!temp_val1.value) temp_val1.value = (1000).toPrecision(8);

		min_but.onclick = () =>{
			temp_val1.value = min.toFixed(7);
			const price = temp_val1.value * price_index;
			if(price>1) temp_val2.innerHTML = "$" + price.toPrecision(8);
			else temp_val2.innerHTML = "$" + price.toFixed(7);			
		}
		max_but.onclick = () =>{
			temp_val1.value = max.toPrecision(8);
			const price = temp_val1.value * price_index;
			if(price>1) temp_val2.innerHTML = "$" + price.toPrecision(8);
			else temp_val2.innerHTML = "$" + price.toFixed(7);			
		}
		divide.onclick = () =>{
			const temp = temp_val1.value/2;
			if(temp>min*10){
				if(temp>1) temp_val1.value = temp.toPrecision(8);
				else temp_val1.value = temp.toFixed(7);
				const price = temp_val1.value * price_index;
				if(price>1) temp_val2.innerHTML = "$" + price.toPrecision(8);
				else temp_val2.innerHTML = "$" + price.toFixed(7);			
			}
		}
		multi.onclick = () =>{
			const temp = temp_val1.value*2;
			if(temp<max){
				if(temp>1) temp_val1.value = temp.toPrecision(8);
				else temp_val1.value = temp.toFixed(7);
				const price = temp_val1.value * price_index;
				if(price>1) temp_val2.innerHTML = "$" + price.toPrecision(8);
				else temp_val2.innerHTML = "$" + price.toFixed(7);				
			}
		}

		const Game = document.getElementById('game_mode');
		var autobet = document.getElementById('autobet-wrapper');
		var Game_mode = 0;
		Game.onclick = () =>{
			console.log(Game_mode);
			if(Game_mode){
				Game_mode = 0;
				autobet.style.display = 'none';
				document.getElementById('start_but').innerHTML = 'APUESTA';
			}else{
				Game_mode = 1;
				autobet.style.display = 'block';
				document.getElementById('start_but').innerHTML = 'COMIENZ';
			}
		}

		var toggler_item = document.getElementById('toggler_but');
		toggler_item.onclick = () => {
			// console.log("Here");
			var toggler = document.getElementById('toggler_but').classList;
			// if(toggler.value)
			if(toggler[1]==='reset') toggler.replace('reset','increase');
			else toggler.replace('increase','reset');
		}

		var toggler_item1 = document.getElementById('toggler_but1');
		toggler_item1.onclick = () => {
			// console.log("Here");
			var toggler = document.getElementById('toggler_but1').classList;
			// if()
			// console.log(toggler);
			if(toggler[1]==='reset') toggler.replace('reset','increase');
			else toggler.replace('increase','reset');
		}

		document.getElementById('active_toggle1').onclick = () =>{
			var toggler = document.getElementById('toggler_but').classList;
			toggler.replace('reset','increase');
		}
		document.getElementById('active_toggle2').onclick = () =>{
			var toggler = document.getElementById('toggler_but1').classList;
			toggler.replace('reset','increase');
		}


		const cube = document.querySelector('.cube')
		const time = 2
		
		document.getElementById('start_but').onclick = () => {
		  cube.style.transition = ''
		  cube.style.transform = `translateY(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
		  setTimeout(() => {
			cube.style.transition = `transform ${time}s`
			const randomValue = Math.floor(Math.random() * 6 + 1)
			console.log(`randomValue: ${randomValue}`)
		
			switch (randomValue) {
			  case 1:
				cube.style.transform = `translateY(400px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`
				break
			  case 2:
				cube.style.transform = `translateY(400px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`
				break
			  case 3:
				cube.style.transform = `translateY(400px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`
				break
			  case 4:
				cube.style.transform = `translateY(400px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`
				break
			  case 5:
				cube.style.transform = `translateY(400px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`
				break
			  case 6:
				cube.style.transform = `translateY(400px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`
				break
			}
		  }, time * 10)
		}
		


	});

	const set_throw_type = () => {
		var slider = document.getElementById("myRange");
		var Rodar = document.getElementById("Rodar");
		var Voltear = document.getElementById("Voltear");

		if(!throw_type){
			Voltear.style.background = 'linear-gradient(to right, #2c3995 0%, #0095ff 100%)';
			Rodar.style.background = 'linear-gradient(to right, #eb2726 0%, #f5b206 100%)';
			slider.style.background = "linear-gradient(to right, #d3a218 0%, #eb2626 "+slider.value+"%, #2a7bdb "+slider.value+"%, #03172e 100%)";
			document.getElementById("Oportun").innerHTML = 100-slider.value + "%";
			const  Multiplicador = slider.value*multi_const;
			document.getElementById("Multiplicador").innerHTML = "x"+Multiplicador.toFixed(4);
		}else{
			Rodar.style.background = 'linear-gradient(to right, #2c3995 0%, #0095ff 100%)';
			Voltear.style.background = 'linear-gradient(to right, #eb2726 0%, #f5b206 100%)';
			slider.style.background = "linear-gradient(to right, #2a7bdb 0%, #03172e "+slider.value+"%, #d3a218 "+slider.value+"%, #eb2626 100%)";
			document.getElementById("Oportun").innerHTML = slider.value + "%";
			const  Multiplicador = 5 - slider.value*multi_const;
			document.getElementById("Multiplicador").innerHTML = "x"+Multiplicador.toFixed(4);
		}	

	}


	return (
		<>
			<main className='main main_dice'>
				<div className='container mt-5'>
					<div className='border'>
						<div className='row'>
							<div className='col-md-4 col-lg-4 col-sm-6 prediction_board'>
								<div className='prediction'>
									<span className='number' id="prediction_no">58</span>
									<span className='prediction-text'>Predicción</span>
								</div>
							</div>
							<div className='col-md-4 col-lg-4 dice_region' >


								<div className='dice_background'>
									<div className='dice_shadow'>
										{/* <div className='dice'></div> */}
									</div>
								</div>
								<div className='dice_background_wrap'>
									<div className='dice_shadow1'>
									<div className="container1">
									<div className="cube">
										<div className="cube-face front">
										<div className="inside">
											<span className="dot"></span>
										</div>
										</div>
										<div className="cube-face back">
										<div className="inside">
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
										</div>
										</div>
										<div className="cube-face left">
										<div className="inside">
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
										</div>
										</div>
										<div className="cube-face right">
										<div className="inside">
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
										</div>
										</div>
										<div className="cube-face top">
										<div className="inside">
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
											<span className="dot"></span>
										</div>
										</div>
										<div className="cube-face bottom">
										<div className="inside">
											<span className="dot"></span>
											<span className="dot"></span>
										</div>
										</div>
									</div>
								</div>

									</div>
								</div>

							</div>
							<div className='col-md-4 col-lg-4 col-sm-6 prediction_board'>
								<div className='prediction'>
									<span className='number'>00</span>
									<span className='prediction-text'>Número de la suerte</span>
								</div>
							</div>
						</div>
					</div>



					<div className="slider">
						<input type="range" min="0" max="100" className="range_slider" id="myRange"/>
						<div className='slider_ball' id='slider_ball'>50</div>
					</div>

					<div className='multi-box row'>
						<div className='item-box item-box-left col-md-3' id="Rodar">
							Rodar
						</div>
						<div className='item-box item-box-middle col-md-3'>
							<h6>Multiplicador</h6>
							<h1 id="Multiplicador">x1.6896</h1>
						</div>
						<div className='item-box item-box-middle col-md-3'>
							<h6>Oportunidad de ganar</h6>
							<h1 id="Oportun">58%</h1>
						</div>
						<div className='item-box item-box-right col-md-3' id="Voltear">
							Voltear
						</div>
					</div>
					<div className='row show-boxs'>
						<div className='col-md-5 show-box row'>
							<div className='col-md-3'>
								<div  className='btn' id="min_but">Min</div>
								<div className='gradient_line'></div>
								<div className='btn'  id="max_but">Max</div>
							</div>
							<div className='col-md-6'>
								<div className='row' style={{paddingTop:"10px"}}>
									<div className='col-md-2' style={{padding:"0px"}}>
										<img src={bitcoin_img} alt="BTC" loading="lazy" className="icon_ball"/>
									</div>
									<div className='col-md-10' style={{padding:"0px"}}>
										<input className='temp_val' type='text' id="temp_val1"/>
										<h4 id="temp_val2" className='text-grey'>$0.0019074</h4>
									</div>
								</div>
							</div>
							<div className='col-md-3'>
								<div  className='btn' id="divide">1/2</div>
								<div className='gradient_line'></div>
								<div  className='btn' id ="multi">x2</div>
							</div>
						</div>
						<div className='col-md-2'></div>
						<div className='col-md-5 show-box right-box-info' id="start_but">
							APUESTA
						</div>
					</div>

					<label className="switch">
						<input type="checkbox" id='game_mode'/>
						<span className="slider1 round"></span>
					</label>


					<div className="autobet-wrapper" id="autobet-wrapper">
						<div className="autobet">
							<form data-v-8ed583e4>
								<div  className="form-group">
									<h4  className="form-group__title"> Number of bets </h4>
									<div  className="form-group__row full">
										<input  onclick="this.select()" inputMode="decimal" placeholder="0" type="text" min="0"/>
										<span  className="symbol">∞</span>
									</div>
								</div>
								<div className="form-group">
									<h4  className="form-group__title"> Stop on Profit </h4>
									<div  className="form-group__row full">
										<img  src={bitcoin_img} alt="BTC" loading="lazy" className=""/>
										<input  onclick="this.select()" inputMode="decimal" placeholder="0" pattern="\d*" type="text" min="0"/>
									</div>
								</div>
								<div  className="form-group">
									<h4  className="form-group__title">Stop on Loss</h4>
									<div  className="form-group__row full">
										<img  src={bitcoin_img} alt="BTC" loading="lazy" className=""/>
										<input  inputMode="decimal" placeholder="0" pattern="\d*" type="text" min="0"/>
									</div>
								</div>
								<div  className="form-group">
									<h4  className="form-group__title">Max bet amount:</h4>
									<div  className="form-group__row full">
										<img  src={bitcoin_img} alt="BTC" loading="lazy" className=""/>
										<input  inputMode="decimal" placeholder="0" pattern="\d*" type="text" min="0"/>
									</div>
								</div>
								<div  className="form-group">
									<h4  className="form-group__title">On Win</h4>
									<div  className="form-group__row">
										<button  type="button" className="toggler reset" id='toggler_but'>
											<div  className="toggler__inner"></div>
											<div  className="toggler__body">
												<span >Reset</span>
												<span >Increase</span>
											</div>
										</button>
										<div  className="number">
											<input id="active_toggle1" inputMode="decimal" placeholder="0" type="text" min="0"/>
											<span  className="symbol">%</span>
										</div>
									</div>
								</div> 
								<div  className="form-group">
									<h4  className="form-group__title">On Loss </h4>
									<div  className="form-group__row">
										<button  type="button" className="toggler reset" id='toggler_but1'>
											<div  className="toggler__inner"></div>
											<div  className="toggler__body">
												<span >Reset</span>
												<span >Increase</span>
											</div>
										</button>
										<div  className="number">
											<input id="active_toggle2" inputMode="decimal" placeholder="0" type="text" min="0"/>
											<span  className="symbol">%</span>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>


				</div>
			</main>
		</>
	);
};

export default Dice;
