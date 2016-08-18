import test from 'ava'
import ghPinnedRepos from './'

test('gh-pinned-repos does something awesome', async t => {
  t.plan(1)

  const repos = await ghPinnedRepos('johnotander')
  console.log(repos)
  t.truthy(repos.length)
})
