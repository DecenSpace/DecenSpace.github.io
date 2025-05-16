export function getExplorerLink(signature: string) {
    const explorerLink = `https://solscan.io/tx/${signature}?cluster=devnet`;

    return explorerLink;
}
