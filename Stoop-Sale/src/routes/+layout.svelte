<script>
    import '../app.css'
    import { AppBar } from '@skeletonlabs/skeleton';

    function scrollToSection(e, targetSection) {
        e.preventDefault();
        console.log("section");
        const section = document.getElementById(targetSection);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<div class="text-magma w-full">
    <AppBar background="bg-cream">
        <button class="bg-transparent mr-2 border-b-2 border-sunflower" on:click={(e) => {scrollToSection(e, "about-section")}}>About</button>
        <button class="bg-transparent mr-2 border-b-2 border-sunflower" on:click={(e) => {scrollToSection(e, "items-section")}}>Items</button>
        <button class="bg-transparent border-b-2 border-sunflower" on:click={(e) => {scrollToSection(e, "where-section")}}>Where</button>
    </AppBar>
</div>

<slot />

<footer class="bg-charcoal text-cream py-6">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
                <a href="/" class="text-xl font-bold">Stoop Sales</a>
            </div>
            <div class="flex space-x-4">
                <a href="/" class="hover:text-gray-400">Home</a>
                <a href="/" class="hover:text-gray-400">Socials</a>
                <!-- https://www.instagram.com/codedex.io/ -->
                 <!-- https://www.codedex.io/home -->
                <a href="/admin/login" class="hover:text-gray-400">Admin</a>
            </div>
        </div>
        <div class="mt-4 text-center">
            <p class="text-sm">&copy; 2024 Your Brand. All rights reserved.</p>
        </div>
    </div>
</footer>
