<?php
/**
 * Plugin Name: Thor Gutenberg Blocks Plugin
 * Description: A React-based Gutenberg block.
 * Version: 1.0
 * Author: Thor Solutions
 */

function custom_react_block_enqueue_scripts() {
    wp_enqueue_script(
        'thor-gutenberg-blocks',
        plugin_dir_url(__FILE__) . 'block.build.js',
        array('wp-blocks', 'wp-components', 'wp-element','wp-block-editor'),
        '1.0', // Version number
        true    // Load script in the footer
    );
}

add_action('enqueue_block_editor_assets', 'custom_react_block_enqueue_scripts');
