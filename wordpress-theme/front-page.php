<?php get_header(); ?>

<main>
    <!-- Hero Section -->
    <section class="relative bg-black min-h-[600px] flex items-center overflow-hidden">
        <?php 
        $hero_image = get_field('home_hero_image');
        if ($hero_image): ?>
            <img src="<?php echo $hero_image; ?>" class="absolute inset-0 w-full h-full object-cover opacity-60" alt="Hero Image">
        <?php endif; ?>
        
        <div class="relative mx-auto max-w-7xl px-4 py-24 text-white">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">
                <?php the_field('home_hero_title') ?: the_title(); ?>
            </h1>
            <div class="max-w-3xl text-lg md:text-xl leading-relaxed">
                <?php the_field('home_hero_paragraph'); ?>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section class="py-20 bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Left Column (The Experience) -->
            <div class="lg:col-span-2">
                <h2 class="text-3xl font-bold mb-8 border-l-4 border-primary pl-4">The RBANM's Experience</h2>
                <div class="prose prose-lg max-w-none">
                    <?php the_field('rbnam_experience_text'); ?>
                </div>
            </div>

            <!-- Right Column Card -->
            <div class="lg:col-span-1">
                <div class="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-primary">
                    <?php 
                    $card_image = get_field('right_column_card_image');
                    if ($card_image): ?>
                        <img src="<?php echo $card_image; ?>" class="w-full h-48 object-cover" alt="Card Image">
                    <?php endif; ?>
                    <div class="p-8">
                        <h3 class="text-xl font-bold mb-4"><?php the_field('right_column_card_title'); ?></h3>
                        <p class="text-gray-600 mb-6"><?php the_field('right_column_card_text'); ?></p>
                        <a href="#" class="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-red-900 transition">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
