<script>
    // Props con valores por defecto
    export let value = '';
    export let type = 'text'; 
    export let name = 'inputField';
    export let placeholder = ''; 

</script>

<div class="input-group">
    <input
        {name}
        bind:value
        {type}
        {placeholder}
    />
</div>

<style>
    .input-group {
        width: 100%; 
        
    }

    input {
        width: 100%; 
        padding: 0.8rem 1.8rem;
        border: 1px solid #ccc; 
        border-radius: 12px; 
        font-size: 1rem;
        font-family: inherit; 
        box-sizing: border-box; 
        transition: all 0.2s ease-in-out; 
        background-color: #fff; 
        color: #333; 
    }

    input::placeholder {
        color: #999;
    }

    input:hover {
        border-color: #999; 
    }

    input:focus {
        outline: none; 
        border-color: #007bff; 
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25); 
    }
</style>