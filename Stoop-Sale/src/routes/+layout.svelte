<script>
    import '../app.css'
    import { initializeStores, Toast } from '@skeletonlabs/skeleton';

initializeStores();
</script>

<slot />
<Toast />