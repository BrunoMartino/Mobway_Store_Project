<?php 
// format and deploy Html and CSS class for products on home and category pages.

function format_products($products, $img_size = 'medium') {
$products_final = [];
  foreach ($products as $product) {
    if($product->is_type('variable')) {
      $regular_price = $product->get_variation_regular_price('min', true);
      $sell_price = $product->get_variation_sale_price('max', true);
    } else {
      $regular_price = $product->get_regular_price();
      $sell_price = $product->get_sale_price();
    }
    $products_final[] = [
      'name' => $product->get_name(),
      'link' => $product->get_permalink(),
      'regular-price' => $regular_price,
      'sell-price' => $sell_price,
      'img' => wp_get_attachment_image_src($product->get_image_id(), $img_size)[0]
    ];
  }
return $products_final;
}
?>

<?php 
function mobway_product_list($products) { ?>
  <ul class='product__list'>
    <div class='prev-btn'><p>Prev</p></div>
    <div class='next-btn'><p>next</p></div>
<?php foreach($products as $product) { ?>
  <li class='product__list-item'>
    <div class='product__list-benefits'>
    <p class='product__list-secure font-1-up-s rx-05'>Dados Seguros </p>
      <p class='product__list-free-ship font-1-up-s rx-05'>Frete Gratuito </p>
      <p class='product__list-credit font-1-up-s rx-05'>até 12x</p>
    </div>
    <a href="<?= $product['link'] ?>">
    <div class='product__list-img'>
      <img src="<?= $product['img'] ?>" alt="<?= $product['name'] ?>" loading="lazy" width="260" height="300">
    </div>
      <h2 class='font-1-m'><?= $product['name'] ?></h2>
    <div class="product__list-info">
      <div>
      <p class=' font-1-xs reg-price'>R$ <?= $product['regular-price'] ?></p>
      <p class='font-1-s sell-price'> R$ <?= $product['sell-price'] ?></p>
      </div>
      <p class='product__list-btn font-1-up-s'>Comprar</p>
    </div>
    </a>
  </li>
  <?php } ?>
  </ul>
  <?php } ?>