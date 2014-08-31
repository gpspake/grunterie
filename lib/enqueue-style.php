<?php
/*********************
Enqueue the proper CSS
if you use Sass.
 *********************/
if( ! function_exists( 'grunterie_enqueue_style' ) ) {
    function grunterie_enqueue_style()
    {
        // foundation stylesheet
        //wp_register_style( 'grunterie-foundation-stylesheet', get_stylesheet_directory_uri() . '/css/app.css', array(), '' );

        // Register the main style
        wp_register_style( 'grunterie-stylesheet', get_stylesheet_directory_uri() . '/css/style.css', array(), '', 'all' );

        //wp_enqueue_style( 'grunterie-foundation-stylesheet' );
        wp_enqueue_style( 'grunterie-stylesheet' );

    }
}
add_action( 'wp_enqueue_scripts', 'grunterie_enqueue_style' );
