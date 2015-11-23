// Write your Pizza Builder JavaScript in this file.
$('.sauce').removeClass('sauce-white');
$('.crust').removeClass('crust-gluten-free');
$('.btn-pepperonni').removeClass('active');
$('.btn-sauce').removeClass('active');
$('.btn-crust').removeClass('active');
$('.pep').hide();
$('.price li:nth-child(1)').hide();
$('.price li:nth-child(4)').hide();
$('.price li:nth-child(5)').hide();

var price = 12;


$('.btn-green-peppers').on('click', function(){
  $('.green-pepper').toggle();
  $('.btn-green-peppers').toggleClass('active');
  $('.price li:nth-child(3)').toggle();
  if($('.btn-green-peppers').hasClass('active')) {  
    price++;
  } else {
    price--;
  };

  $('.total-price').text('$' + price);
});

$('.btn-pepperonni').on('click', function(){
  $('.btn-pepperonni').toggleClass('active');
  $('.pep').toggle();
  $('.price li:nth-child(1)').toggle();
  if($('.btn-pepperonni').hasClass('active')) {  
    price++;
  } else {
    price--;
  };
  $('.total-price').text('$' + price);
});

$('.btn-mushrooms').on('click', function(){
  $('.btn-mushrooms').toggleClass('active');
  $('.mushroom').toggle();
  $('.price li:nth-child(2)').toggle();
  if($('.btn-mushrooms').hasClass('active')) {  
    price++;
  } else {
    price--;
  };
  $('.total-price').text('$' + price);
});

$('.btn-sauce').on('click', function(){
  $('.btn-sauce').toggleClass('active');
  $('.sauce').toggleClass('sauce-white');
  $('.price li:nth-child(4)').toggle();
  if($('.btn-sauce').hasClass('active')) {  
    price = price + 3;
  } else {
    price = price - 3;
  };
  $('.total-price').text('$' + price);
});

$('.btn-crust').on('click', function(){
  $('.btn-crust').toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
  $('.price li:nth-child(5)').toggle();
  if($('.btn-crust').hasClass('active')) {  
    price = price + 5;
  } else {
    price = price - 5;
  };
  $('.total-price').text('$' + price);
});



