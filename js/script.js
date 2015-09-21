/* js file */

(function( window, undefined ){

})( window, undefined );


var Dropdown = function ( button,nav){

	var that = this;
	var respondToClick = function(e){

		if ( that.isHidden){
			that.show();
			that.isHidden =false;
		}
		else { that.hide();
			that.isHidden=true;

		}
		e.preventDefault();

	};



	this.button = document.getElementById ( button);
	this.button = document.getElementById ( nav);

	this.isHidden = false;
	this.button.addEventListener( "click", respondToClick);
};

Dropdown.prototype.show = function(){

console.log(this.nav.className);


};
Dropdown.prototype.hide = function (){

	var c = this.nav.className;
	this.nav.className = c + "active";
	return this.navclassName;




};

var dd = new Dropdown ( " menu_button", "main_navigation_active")