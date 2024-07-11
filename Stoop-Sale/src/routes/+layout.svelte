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

<div class="text-secondary-500 w-full">
    <AppBar background="bg-primary-500">
        <button class="btn variant-ringed-primary" on:click={(e) => {scrollToSection(e, "about-section")}}>About</button>
        <button class="btn variant-ringed-primary" on:click={(e) => {scrollToSection(e, "items-section")}}>Items</button>
        <button class="btn variant-ringed-primary" on:click={(e) => {scrollToSection(e, "where-section")}}>Where</button>
    </AppBar>
</div>

<slot />
