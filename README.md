# Muxboard concept site

Static concept page for the multi-model orchestration console. Host on Cloudflare Pages and attach `muxboard.efwmcapp.com`.

This is a sample, not a production router. Numbers in the ledger are illustrative.

## Deploy

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Repository: `linuxing3/muxboard`, production branch `main`.
3. Framework preset: None. Build command: empty. Output directory: `/`.
4. Custom domain: `muxboard.efwmcapp.com`.
5. In the `efwmcapp.com` zone, add the CNAME Cloudflare shows, or a proxied CNAME `muxboard` to `<project>.pages.dev`.

CLI, from this directory:

```bash
npx wrangler pages project create muxboard --production-branch main
npx wrangler pages deploy . --project-name muxboard
npx wrangler pages domain add muxboard.efwmcapp.com --project-name muxboard
```

The zone for `efwmcapp.com` must already be on the same Cloudflare account.
