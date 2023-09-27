<?php get_header(); ?>
<div class="container single__product-breadcrumb"><?php woocommerce_breadcrumb(['delimiter' => '>']); ?></div>
<div class='container notificacao'> 
  <?php wc_print_notices(); ?>
</div>
<main class ='container product__main'>
<?php
if(have_posts()){
  while (have_posts()) {
    the_post();
    $product_data = mobway_format_single_product(get_the_ID(), $image_size = 'product-gallery');
    $icon_url = get_template_directory_uri() . '/mobway-imgs/icons';
?>    
<div class='product__gallery' data-gallery='gallery'>
<div class="product__gallery-list">
<div data-product="control" class='prev-btn'><img src="<?= $icon_url . '/arrow-left.svg'?>" alt="prev"></div>
<div data-product="control" class='next-btn'><img src="<?= $icon_url . '/arrow-right.svg'?>" alt="next"></div>
<ul class='product__gallery-slide'>
<?php foreach($product_data['gallery'] as $img) { ?>
<li class='product__gallery-img'>
  <img data-gallery='gallery-imgs' src="<?= $img; ?>" alt="<?= $product_data['name']; ?>" loading='lazy'>
</li>
<?php } ?>
</ul>  
</div>
<div class='product__gallery-main'>
  <img data-gallery="gallery-main" src="<?= $product_data['img']; ?>" alt="<?= $product_data['name']; ?>">
</div>
</div>
<section class='product__info'>
<small class='font-1-up-xs cz-06'><?= 'sku: ' . $product_data['sku']; ?></small> 
<h1 class='font-1-up-l'><?= $product_data['name']; ?></h1>
<div class='product__info-price'>
<p class='font-1-up-m' >R$ <?= $product_data['regular-price']; ?></p>
<p class='font-1-up-s cz-07'>R$ <?= $product_data['sell-price']; ?></p>
</div>
<div class='product__info-varations'>
  <?php mobway_get_product_variation(get_the_ID()) ?>
<div class='btn-flexbox'>
    <?php woocommerce_template_single_add_to_cart(); ?>
<div>
      <p class='shipping font-1-up-xs rs-05'>Frete Grátis</p>
      <p class='credit font-1-up-xs rs-05'>Até 12x</p>
</div>
<div>
</section>
<?php } } ?>
</main>
<section class='container'>
<div class='product__description'>
  <h2 class='font-1-up-m cz-05' >Descrição</h2>
  <p><?= $product_data['description']; ?></p>
</div>
</section>
<?php 
$related_ids = wc_get_related_products( $product_data['id'], 3 );
$related_products = [];
foreach($related_ids as $product_id) {
  $related_products[] = wc_get_product($product_id);
}
$related = format_products($related_products) ;
?>
<section class='container'>
<div class='products__related'>
  <h2 class='font-2-up-xl'>Recomendamos:</h2>
  <?php mobway_product_list($related); ?>
</div>
</section>
<?php get_footer(); ?>