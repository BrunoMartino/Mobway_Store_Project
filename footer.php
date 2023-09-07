<footer>
  <div class='footer__content container'>
    <div class='footer__content-cat'>
    <h3 class='font-1-up-m rx-06'>Categorias:</h3>
    <?php 
    wp_nav_menu([
    'menu' => 'footer-category',  
    'container'=> 'nav',
    'container_class'=>'footer__cat-grid',
      ])
    ?>
    </div>
    <nav class='footer__content-contact'>
      <h3 class='font-1-up-m rx-06'>Contatos:</h3>
      <ul>
        <li class='email'><a class="font-1-s rx-06" href="mailto:atendimento@mobwaystore.com.br">atendimento@mobway.com.br</a></li>
        <li class='wpp'><a class="font-1-s rx-06" href="https://wa.me/5531991204061">(31) 99120-4061</a></li>
      </ul>
    </nav>
    <div class='footer__content-intern-pages'>
      <h3 class='font-1-up-m rx-06'>Páginas Úteis:</h3>
      <?php 
        wp_nav_menu([
      'menu' => 'footer-intern-pages',  
      'container'=> 'nav',
      'container_class'=>'footer__pages-list',
      ])
    ?>
    </div>
  </div>
  <div class='footer__end container'>
    <p class="font-1-xs cz-08">Mobway - 61.758.946/0001-06  - 2023 - ₢ todos os direitos reservados</p>
    <a class="font-1-xs cz-08" href="#">Desenvolvido por: B&D WebDev</a>
  </div>
</footer>
<?php wp_footer();?>
<script defer src="<?= get_stylesheet_directory_uri(); ?>/main/main.js"></script>
</body> 
</html>