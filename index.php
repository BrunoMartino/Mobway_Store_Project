<?php get_header(); ?>

<?php if (have_posts()) { while(have_posts()) { the_post();?>
  <h1 class='index-title hidden container'><?php the_title()?></h1>
  <main class='container'> <?php the_content()?>
  </main>
  <?php } } ?>

  <?php get_footer(); ?>