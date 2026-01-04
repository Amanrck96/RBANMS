<?php
/**
 * RBANMS Theme Functions
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue scripts and styles
 */
function rbanms_scripts() {
	// Tailwind CDN for immediate preview/dev
	wp_enqueue_script( 'tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false );
    
    // Lucide Icons CDN
    wp_enqueue_script( 'lucide-icons', 'https://unpkg.com/lucide@latest', array(), null, true );
    wp_add_inline_script( 'lucide-icons', 'lucide.createIcons();' );

	wp_enqueue_style( 'rbanms-style', get_stylesheet_uri(), array(), '1.0.0' );
    
    // Custom Google Fonts: PT Sans
    wp_enqueue_style( 'google-fonts-pt-sans', 'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap', array(), null );
}
add_action( 'wp_enqueue_scripts', 'rbanms_scripts' );

/**
 * Theme Setup
 */
function rbanms_setup() {
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'rbanms' ),
	) );
}
add_action( 'after_setup_theme', 'rbanms_setup' );

/**
 * 🔐 ROLE CREATION: Content Admin
 * As requested, create a role with limited capabilities
 */
function rbanms_register_custom_roles() {
    add_role( 'content_admin', 'Content Admin', array(
        'read'                    => true,
        'upload_files'            => true,
        'edit_posts'              => true,
        'edit_published_posts'    => true,
        'publish_posts'           => true,
        'edit_pages'              => true,
        'edit_published_pages'    => true,
        'level_1'                 => true, // Required for some basic UI exposure
    ) );
}
add_action( 'init', 'rbanms_register_custom_roles' );

/**
 * 🛠️ CONTENT EDITOR DASHBOARD
 * Add a custom menu to simplify the experience for Admins
 */
function rbanms_admin_menu() {
    add_menu_page(
        'Content Editor',
        'Content Editor',
        'read',
        'content-editor',
        'rbanms_content_editor_page',
        'dashicons-edit',
        2
    );
}
add_action( 'admin_menu', 'rbanms_admin_menu' );

function rbanms_content_editor_page() {
    ?>
    <div class="wrap">
        <h1>Content Editor Dashboard</h1>
        <p>Welcome! Use the links below to quickly edit the most important parts of the website.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;">
            <div style="background: #fff; padding: 20px; border: 1px solid #ccd0d4; border-radius: 4px;">
                <h3>📝 Edit Homepage</h3>
                <p>Change your hero text, images, and "The RBANM Experience" content.</p>
                <a href="<?php echo admin_url('post.php?post=' . get_option('page_on_front') . '&action=edit'); ?>" class="button button-primary">Edit Home</a>
            </div>
            
            <div style="background: #fff; padding: 20px; border: 1px solid #ccd0d4; border-radius: 4px;">
                <h3>🖼️ Manage Media</h3>
                <p>Upload new photos and documents to the library.</p>
                <a href="<?php echo admin_url('upload.php'); ?>" class="button">Go to Library</a>
            </div>
            
            <div style="background: #fff; padding: 20px; border: 1px solid #ccd0d4; border-radius: 4px;">
                <h3>📅 Create News/Blog</h3>
                <p>Add new announcements or blog posts.</p>
                <a href="<?php echo admin_url('post-new.php'); ?>" class="button">Add New Post</a>
            </div>
        </div>
    </div>
    <?php
}

/**
 * 🧩 ACF FIELD REGISTRATION (LOCAL)
 * This registers the requested Home Page fields automatically
 */
if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_home_fields',
	'title' => 'Home Page Content',
	'fields' => array(
		array(
			'key' => 'field_home_hero_title',
			'label' => 'Hero Title',
			'name' => 'home_hero_title',
			'type' => 'text',
		),
		array(
			'key' => 'field_home_hero_paragraph',
			'label' => 'Hero Paragraph',
			'name' => 'home_hero_paragraph',
			'type' => 'wysiwyg',
		),
		array(
			'key' => 'field_home_hero_image',
			'label' => 'Hero Image',
			'name' => 'home_hero_image',
			'type' => 'image',
            'return_format' => 'url',
		),
		array(
			'key' => 'field_right_column_card_title',
			'label' => 'Right Column Title',
			'name' => 'right_column_card_title',
			'type' => 'text',
		),
		array(
			'key' => 'field_right_column_card_text',
			'label' => 'Right Column Text',
			'name' => 'right_column_card_text',
			'type' => 'textarea',
		),
        array(
			'key' => 'field_right_column_card_image',
			'label' => 'Right Column Image',
			'name' => 'right_column_card_image',
			'type' => 'image',
            'return_format' => 'url',
		),
        array(
			'key' => 'field_rbnam_experience_text',
			'label' => 'RBANM Experience (List)',
			'name' => 'rbnam_experience_text',
			'type' => 'wysiwyg',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'page_type',
				'operator' => '==',
				'value' => 'front_page',
			),
		),
	),
));

endif;
