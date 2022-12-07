<script>
    import { Pincode, PincodeInput } from "svelte-pincode";
    import { verifyReq } from "./utils";
    export let verified = false;
    let wrongPin = false;
    let complete = false;
    let code = [];

    $: complete &&
        code[0] !== "" &&
        verifyReq(code).then((res) =>
            res.success ? (verified = true) : (wrongPin = true)
        );
</script>

<main>
    <div class="pin">
        <Pincode bind:complete bind:code>
            <PincodeInput />
            <PincodeInput />
            <PincodeInput />
            <PincodeInput />
        </Pincode>
    </div>
    {#if wrongPin}
        <p class="error">Wrong pin. Try again</p>
    {/if}
</main>

<style>
    .pin {
        text-align: center;
        margin-top: 50vh;
        transform: translateY(-100%);
    }
    .error {
        color: red;
        text-align: center;
    }
</style>
