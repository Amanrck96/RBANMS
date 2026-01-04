<?php get_header(); ?>

<main class="mx-auto max-w-7xl px-4 py-20">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <article class="prose prose-lg max-w-none mb-12">
            <h1><?php the_title(); ?></h1>
            <?php the_content(); ?>
        </article>
    <?php endwhile; else : ?>
        <p><?php _e( 'Sorry, no posts matched your criteria.', 'rbanms' ); ?></p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
