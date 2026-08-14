import{_ as n,o as a,c as s,a0 as t}from"./chunks/framework.BQGW-Zpy.js";const u=JSON.parse('{"title":"Live Testnet Evidence","description":"","frontmatter":{},"headers":[],"relativePath":"reference/testnet-evidence.md","filePath":"reference/testnet-evidence.md"}'),p={name:"reference/testnet-evidence.md"};function i(r,e,c,o,l,d){return a(),s("div",null,[...e[0]||(e[0]=[t(`<h1 id="live-testnet-evidence" tabindex="-1">Live Testnet Evidence <a class="header-anchor" href="#live-testnet-evidence" aria-label="Permalink to &quot;Live Testnet Evidence&quot;">​</a></h1><p>A real, captured run, not illustrative output. Topic <a href="https://hashscan.io/testnet/topic/0.0.9617780" target="_blank" rel="noreferrer">0.0.9617780</a> on Hedera testnet.</p><h2 id="unit-tests-14-14-no-network" tabindex="-1">Unit tests, 14/14, no network <a class="header-anchor" href="#unit-tests-14-14-no-network" aria-label="Permalink to &quot;Unit tests, 14/14, no network&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✔ canonicalHash: same record, different key order → same hash</span></span>
<span class="line"><span>✔ canonicalHash: nested objects are also order-independent</span></span>
<span class="line"><span>✔ canonicalHash: one changed field → different hash (tamper detection)</span></span>
<span class="line"><span>✔ canonicalHash: arrays preserve order</span></span>
<span class="line"><span>✔ pseudoRef: same identifier + same pepper → same reference</span></span>
<span class="line"><span>✔ pseudoRef: same identifier + different pepper → different reference</span></span>
<span class="line"><span>✔ pseudoRef: rejects a missing or short pepper</span></span>
<span class="line"><span>✔ pseudoRef: output is a fixed-length hex string, not the raw identifier</span></span>
<span class="line"><span>✔ chooses hedera when partner supports it and amount is within threshold</span></span>
<span class="line"><span>✔ falls back to ethereum/solana when amount exceeds the threshold</span></span>
<span class="line"><span>✔ falls back when the liquidity fetcher itself fails (network hiccup)</span></span>
<span class="line"><span>✔ throws a clear error for an unconfigured partner</span></span>
<span class="line"><span>✔ every decision carries a human-readable reason</span></span>
<span class="line"><span>✔ candidatesConsidered only includes valid chains</span></span>
<span class="line"><span>ℹ tests 14  ℹ pass 14  ℹ fail 0</span></span>
<span class="line"><span>\`\`\`(8 hashing tests + 6 router tests = 14 total)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## \`node demo-modular.mjs\`, compliance + quote anchoring</span></span></code></pre></div><p>[2] Anchor a compliance record ✓ sequence #2 · sha256:4bbddf329febc65ad… <a href="https://hashscan.io/testnet/transaction/0.0.8762554@1784361892.460950287" target="_blank" rel="noreferrer">https://hashscan.io/testnet/transaction/0.0.8762554@1784361892.460950287</a></p><p>[3] Anchor a quote ✓ sequence #3 · sha256:7660c514c58437bdb…</p><p>[4] Verify both anchors independently via Mirror Node ✓ compliance record: MATCH (consensus 1784361897.785442507) ✓ quote record: MATCH (consensus 1784361899.945158765)</p><p>[5] Tamper, recompute against a modified record someone edits the stored quote: rate 415.20 → 430.00 ✓ MISMATCH, the off-chain record has changed since it was anchored</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## \`node demo-router.mjs\`, real chain routing</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Small amount ($100) → Hedera, executed for real:**</span></span></code></pre></div><p>[1] chain: hedera (bridge: native) Partner supports Hedera and $100 is within the safe threshold ($20000), given ~$18,111,247 in checked Hedera stablecoin liquidity depth. [2] Routing decision anchored, sequence #4 [3] MATCH, anyone can confirm why this transfer went to hedera [4] REAL transaction on hedera: 0.0.8762554@1784361956.533272762 <a href="https://hashscan.io/testnet/transaction/0.0.8762554@1784361956.533272762" target="_blank" rel="noreferrer">https://hashscan.io/testnet/transaction/0.0.8762554@1784361956.533272762</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>**Large amount ($50,000) → Ethereum, not executed:**</span></span></code></pre></div><p>[1] chain: ethereum (bridge: cctp) Amount $50000 exceeds the Hedera safe threshold ($20000); routed to ethereum for deeper liquidity. [2] Routing decision anchored, sequence #5 [3] MATCH, anyone can confirm why this transfer went to ethereum [4] NOT executed on ethereum. No funded ethereum testnet credentials are configured in this environment... Left unexecuted deliberately rather than fabricated.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>::: tip</span></span>
<span class="line"><span>The $18,111,247 figure in the run above reflects the liquidity source</span></span>
<span class="line"><span>in use at the time (DeFiLlama). The liquidity source was later</span></span>
<span class="line"><span>switched to SaucerSwap&#39;s own \`/stats\` endpoint, a named Hedera</span></span>
<span class="line"><span>ecosystem partner rather than a third-party aggregator, verified</span></span>
<span class="line"><span>separately end to end: $26,510,503, live, not hardcoded.</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Completion anchor (Hedera Schedule Service), a real captured run</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Intermediary settlement account, 2-of-2 threshold key:</span></span>
<span class="line"><span>[0.0.9753237](https://hashscan.io/testnet/account/0.0.9753237)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Dedicated completion topic, submit key = the same 2-of-2 partner</span></span>
<span class="line"><span>\`KeyList\`, not the operator key:</span></span>
<span class="line"><span>[0.0.9753239](https://hashscan.io/testnet/topic/0.0.9753239)</span></span></code></pre></div><p>[thresholdAccount] Created intermediary account 0.0.9753237 on testnet. [topic] Created dedicated completion topic 0.0.9753239 (submit key = 2-of-2 partner list).</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>The schedule created against that topic does not execute at creation,</span></span>
<span class="line"><span>and does not execute after only one partner&#39;s \`ScheduleSignTransaction\`</span></span>
<span class="line"><span>signs it, only after both. That gap between &quot;created&quot; and &quot;executed&quot;</span></span>
<span class="line"><span>is what makes the two-party requirement real rather than asserted.</span></span></code></pre></div>`,15)])])}const m=n(p,[["render",i]]);export{u as __pageData,m as default};
