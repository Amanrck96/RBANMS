<footer class="bg-blue-900 text-white pt-12 pb-6">
    <div class="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
            <h3 class="text-yellow-400 font-bold mb-4 uppercase text-sm">Quick Links</h3>
            <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:underline">Home</a></li>
                <li><a href="#" class="hover:underline">About Us</a></li>
                <li><a href="#" class="hover:underline">Admissions</a></li>
                <li><a href="#" class="hover:underline">Contact</a></li>
            </ul>
        </div>
        <div>
            <h3 class="text-yellow-400 font-bold mb-4 uppercase text-sm">Contact Us</h3>
            <p class="text-sm leading-relaxed">
                #24, Haudin Road,<br>
                Opp. Commercial Street,<br>
                Bangalore - 560042
            </p>
        </div>
        <div>
            <h3 class="text-yellow-400 font-bold mb-4 uppercase text-sm">Follow Us</h3>
            <div class="flex gap-4">
                <a href="#" class="hover:text-yellow-400"><i data-lucide="facebook"></i></a>
                <a href="#" class="hover:text-yellow-400"><i data-lucide="instagram"></i></a>
                <a href="#" class="hover:text-yellow-400"><i data-lucide="linkedin"></i></a>
            </div>
        </div>
        <div>
            <h3 class="text-yellow-400 font-bold mb-4 uppercase text-sm">Location</h3>
            <div class="rounded overflow-hidden h-32 bg-white/10">
                <!-- Map Placeholder -->
            </div>
        </div>
    </div>
    <div class="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/60">
        &copy; <?php echo date('Y'); ?> RBANM's First Grade College. All Rights Reserved.
    </div>
</footer>

<?php wp_footer(); ?>
<script>
    // Initialize icons
    lucide.createIcons();
    
    // Mobile menu toggle logic
    document.getElementById('mobile-menu-toggle')?.addEventListener('click', function() {
        alert('Mobile menu clicked! (Theme skeleton logic)');
    });
</script>
</body>
</html>
