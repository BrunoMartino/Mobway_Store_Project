<?php 
//Template Name: Home
get_header() ?>

<?php 
$home_id = get_the_ID();
$categoria_1 = get_post_meta($home_id, 'categoria_1', true);
$categoria_2 = get_post_meta($home_id, 'categoria_2', true);
$categoria_3 = get_post_meta($home_id, 'categoria_3', true);
$categoria_4 = get_post_meta($home_id, 'categoria_4', true);
$categoria_5 = get_post_meta($home_id, 'categoria_5', true);
$categoria_6 = get_post_meta($home_id, 'categoria_6', true);

$data['categories'][$categoria_1] = get_is_product_category_data($categoria_1);
$data['categories'][$categoria_2] = get_is_product_category_data($categoria_2);
$data['categories'][$categoria_3] = get_is_product_category_data($categoria_3);
$data['categories'][$categoria_4] = get_is_product_category_data($categoria_4);
$data['categories'][$categoria_5] = get_is_product_category_data($categoria_5);
$data['categories'][$categoria_6] = get_is_product_category_data($categoria_6);

?>


<?php 
if(have_posts()){while(have_posts()){the_post();?>
<section class='slide-gallery' data-home='slide'>
<?php cmb2_slide_file_list('add_slide_home', 'add_slide_home_url', $image_size = 'slide-gallery')?>
</section>
<section class="container parent-categories">
<nav>
  <ul class='parent-categories__list'>
    <?php foreach($data['categories'] as $category) { ?>
      <li class='parent-categories__item'>
        <a href="<?= $category['link'] ?>">
          <img src="<?= $category['img'] ?>" alt="<?= $category['name'] ?>">
          <p class='font-1-up-m'><?= $category['name'] ?></p>
      </a>
    </li>
      <?php } ?>
  </ul>
</nav>


</section>

<?php } } ?>
<?php get_footer(); ?>