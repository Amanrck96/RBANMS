<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#800000', // Maroon
                        secondary: '#1e3a8a', // Blue 900
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'PT Sans', sans-serif; }
    </style>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header aria-label="Main" class="w-full m-0 p-0">
    <!-- Contact Info Header -->
    <div class="w-full bg-blue-900 text-white border-b border-white/10">
        <div class="relative mx-auto max-w-7xl px-2 py-1 flex flex-col md:flex-row items-center md:justify-center gap-2 text-xs">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex items-center gap-2 shrink-0">
                <div class="bg-white p-1 rounded-sm">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="Logo" width="120" class="h-9 w-auto">
                </div>
            </a>
            <div class="flex items-center gap-3 md:absolute md:right-2">
                <a href="tel:080-48533572" class="flex items-center gap-2 hover:underline text-yellow-400">
                    <i data-lucide="phone" class="h-4 w-4"></i> 080-48533572
                </a>
                <a href="mailto:principal_rbanms@gmail.com" class="flex items-center gap-2 hover:underline text-yellow-400">
                    <i data-lucide="mail" class="h-4 w-4"></i> principal_rbanms@gmail.com
                </a>
            </div>
        </div>
    </div>

    <!-- Navigation Header -->
    <nav class="w-full border-b border-white/10 bg-primary text-white">
        <div class="mx-auto max-w-7xl px-2 py-1 flex items-center justify-between">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'hidden lg:flex flex-nowrap items-center gap-4 text-xs font-medium',
                'fallback_cb'    => false,
            ) );
            ?>
            <div class="lg:hidden ml-auto">
                <button id="mobile-menu-toggle" class="p-2 border border-white/30 rounded">
                    <i data-lucide="menu" class="h-5 w-5"></i>
                </button>
            </div>
        </div>
    </nav>
</header>
