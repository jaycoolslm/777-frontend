<script>
    import { BladeSigner, HederaNetwork } from "@bladelabs/blade-web3.js";
    import { reqTx, sendTx } from "./utils";
    import { Transaction } from "@hashgraph/sdk";

    let bladeSigner;
    let accountId;

    async function loadWallet() {
        bladeSigner = new BladeSigner();
        const params = {
            network: HederaNetwork.Testnet,
            // dAppCode - optional while testing, request specific one by contacting us.
            dAppCode: "777",
        };
        await bladeSigner.createSession(params);

        accountId = bladeSigner.getAccountId().toString();
    }

    async function handleMint() {
        let bytes = await reqTx(accountId);
        const transaction = Transaction.fromBytes(bytes.data);
        const signedTx = await bladeSigner.signTransaction(transaction);
        const success = await sendTx(signedTx);
        console.log("success", success);
    }
</script>

<section>
    <h1>Welcome to the 777 Club</h1>
    <h3>First pair your wallet</h3>
    {#if accountId}
        <h3>Your account ID: {accountId}</h3>
        <button on:click={handleMint}>send 1</button>
    {/if}
    <button on:click={loadWallet}>Pair</button>
</section>
