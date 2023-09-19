<?php
// Add Theme Style on website
function mobway_add_woocommerce_support() {
  add_theme_support('woocommerce');
}
add_action('after_setup_theme', 'mobway_add_woocommerce_support');

function mobway_css() {
  wp_register_style('mobway-style', get_template_directory_uri() . '/style.css', [], '1.0.0', false);
  wp_enqueue_style('mobway-style');
}
add_action('wp_enqueue_scripts', 'mobway_css');
// remove useless CSS bodyclass that are default for Woocommerce

function remove_some_body_class($classes) {
  $woo_class = array_search('woocommerce', $classes);
  $woopage_class = array_search('woocommerce-page', $classes);
  $search = in_array('archive', $classes) || in_array('product-template-default', $classes);
  if($woo_class && $woopage_class && $search) {
    unset($classes[$woo_class]);
    unset($classes[$woopage_class]);
  }
  return $classes;
}
add_filter('body_class', 'remove_some_body_class');

// controls product display on category pages
function mobway_loop_per_page() {
  return 4;
}
add_filter('loop_shop_per_page', 'mobway_loop_per_page')
?>
