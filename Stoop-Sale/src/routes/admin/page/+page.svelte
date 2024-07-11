<script>
    export let data;
</script>

<h1>Admin Page</h1>
<h2>{data.user.email}</h2>

{#each data.emails as mail}
    <p>{mail['email']}</p>
 {/each}

<form method="POST" action="?/logout">
    <button>Logout</button>
</form>

<h2>Add new admin</h2>
<form method="POST" action="?/addAdmin">
    <label for="email">Email</label>
    <input type="text" id="email" name="email"/>

    <label for="password">Password</label>
    <input type="password" id="password" name="password"/>

    <button type="submit">Add admin</button>
</form>