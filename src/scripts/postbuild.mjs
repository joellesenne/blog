import rss from '@/scripts/rss.mjs'

async function postbuild() {
  await rss()
}

postbuild()
