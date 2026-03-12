# KCFB.org

Next.js, TypeScript, Tailwind CSS
Deployed on Vercel: https://kcfb-org.vercel.app
Production: https://kcfb.org
Local dev: http://localhost:3000

## Run Agents

WORK=/Users/brandonhopkins/Projects/kcfb-org/agents/design-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/kcfb-org/agents/content-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/kcfb-org/agents/seo-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
WORK=/Users/brandonhopkins/Projects/kcfb-org/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=5 bash ~/Projects/claude-lab/ENGINE/run.sh
