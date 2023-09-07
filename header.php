<!DOCTYPE html>
<html lang="PT-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content=" Encontre roupas, calçados e acessórios para Moda Alternativa, Kawaii, Esportiva e Gótica. Além de produtos variados de anime, unicórnio e artigos variados">
  <link rel="shortcut icon" href="<?= get_template_directory_uri() . '/mobway-imgs/favicon.svg' ?>" type="image/x-icon">
  <title><?php bloginfo('name');?> <?php wp_title('|'); ?></title>
</head>
<?php wp_head();?>
<body <?php body_class();?>> 
<?php 
$img_url = get_template_directory_uri() . '/mobway-imgs/logo';
$icon_url = get_template_directory_uri() . '/mobway-imgs/icons';
$cart_count = WC()->cart->get_cart_contents_count();
?>

<header>
<div class="header__discount-strip"> 
<p class="font-1-s rx-06"> Use o Cupom <span class="font-1-up-s rx-06">Primeira10</span> para ter 10%OFF na primeira compra</p> 
</div>
<section class='container header__bg'>
  <div class='header__logo'><a href="/"><img src="<?= $img_url . '/mobway_logo.jpg'?>" alt="logo"></a></div>
  <nav class='header__interface'>
  <div data-menu='list'>
  <a class='font-1-up-s rx-06 header__cat-btn'href="/loja">
    <p class='desktop-cat'>Categorias</p>
    <p class='mobile-cat'>menu</p>
  </a>
  <?php
    wp_nav_menu([
      'menu'=> 'all-category',
      'container' => 'nav',
      'container_class' => 'header__categories',
    ]);
    ?>
  </div>
  <div class='header__search'>
    <form action="<?php bloginfo('url');?>/loja/" method ='get'>
    <input type="text" name='s' id='s' class='font-1-s' placeholder='Buscar' value='<?php the_search_query();?>'>
    <input type="text" name='post_type' value='product' class='hidden'>
    <button type='submit' id='searchbutton' value='Buscar'>Buscar</button>
    </form>
  </div>
  <a href="/carrinho" class='header__cart'><img src="<?= $icon_url . '/cart.svg'?>" alt="carrinho">
    <?php if($cart_count) { ?>
    <span class='header__cart-count'><?= $cart_count; ?></span>
    <?php }; ?>
  </a>
  <a href="/login/" class='header__login'>
  <img src="<?= $icon_url . '/login.svg'?>" alt="">
  <p class='font-1-up-s cz-12'>Sua Conta</p>
  </a>     


  </nav>
</section>
</header>