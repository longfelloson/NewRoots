<script>
    import About from "./About.svelte";
    import OpenCall from "./OpenCall.svelte";
    import Participants from "./Participants.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        const emailElements = document.querySelectorAll(".email.copy");

        emailElements.forEach(emailEl => {
            emailEl.addEventListener('click', async () => {
                try {
                    // Copy the text of the clicked element
                    await navigator.clipboard.writeText(emailEl.textContent.trim());
                    alert("Copied: " + emailEl.textContent.trim());
                } catch (err) {
                    console.log(err);
                    alert("Oops! Failed to copy.");
                }
            });
        });
    });
</script>

<main>
    <OpenCall />
    <About />
    <Participants />
</main>
