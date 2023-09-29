<?php 
// remove useless CSS bodyclass that are default for Woocommerce
/*function remove_unwanted_styles() {
    // Dequeue the wc-all-blocks-style.css
    wp_dequeue_style('wc-all-blocks-style');

    // Dequeue the woocommerce.css
    wp_dequeue_style('woocommerce');

    // Dequeue the woocommerce-layout.css
    wp_dequeue_style('woocommerce-layout');

    // Dequeue jQuery
    wp_dequeue_script('jquery');

    // Dequeue jQuery Migrate
    wp_dequeue_script('jquery-migrate');
}

add_action('wp_enqueue_scripts', 'remove_unwanted_styles', 999); // Use a high priority (999) to ensure it runs after the styles are enqueued
*/
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



?>