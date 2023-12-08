<?php 
/*
 * Template Name: Block Template
 * description: >-
  Page template without sidebar
 */
get_header();?>
<?php
// Start the loop
while (have_posts()) : the_post();

    // Output the post content
    the_content();

    // Fetch custom block data
    $title = get_post_meta(get_the_ID(), 'title', true);
    $content = get_post_meta(get_the_ID(), 'content', true);
    $description = get_post_meta(get_the_ID(), 'description', true);
    $imageUrl = get_post_meta(get_the_ID(), 'imageUrl', true);

    // Output or use the fetched data as needed
    echo '<h2>' . esc_html($title) . '</h2>';
    echo '<p>' . esc_html($content) . '</p>';
    echo '<p>' . esc_html($description) . '</p>';
    if ($imageUrl) {
        echo '<img src="' . esc_url($imageUrl) . '" alt="Block Preview">';
    }

endwhile; // End the loop
?>
<?php get_footer(); ?>