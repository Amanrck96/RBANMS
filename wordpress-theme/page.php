<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative bg-black min-h-[400px] flex items-center overflow-hidden">
        <?php
        $hero_image = get_field('page_hero_image');
        if ($hero_image): ?>
            <img src="<?php echo esc_url($hero_image['url']); ?>" class="absolute inset-0 w-full h-full object-cover opacity-60" alt="<?php echo esc_attr($hero_image['alt']); ?>">
        <?php endif; ?>

        <div class="relative mx-auto max-w-7xl px-4 py-24 text-white">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
                <?php the_field('page_hero_title') ?: the_title(); ?>
            </h1>
        </div>
    </section>

    <!-- Content Section -->
    <section class="py-20 bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Left Column (Main Content) -->
            <div class="lg:col-span-2">
                <div class="prose prose-lg max-w-none">
                    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                        <?php the_content(); ?>
                    <?php endwhile; endif; ?>
                </div>
            </div>

            <!-- Right Column Sidebar -->
            <div class="lg:col-span-1">
                <div class="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-primary">
                    <?php
                    $sidebar_image = get_field('page_sidebar_image');
                    if ($sidebar_image): ?>
                        <img src="<?php echo esc_url($sidebar_image['url']); ?>" class="w-full h-48 object-cover" alt="<?php echo esc_attr($sidebar_image['alt']); ?>">
                    <?php endif; ?>
                    <div class="p-8">
                        <p class="text-gray-600 mb-6"><?php the_field('page_sidebar_text'); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
