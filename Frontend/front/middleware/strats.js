export default async function (context, next) {
  // Universal keys
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    redirect,
    error,
    $config
  } = context

  // Server-side
  if (process.server) {
    console.log('## Server-side')
    const { req, res, beforeNuxtRender } = context
    next()
  }

  // Client-side
  if (process.client) {
    console.log('## Client-side')
    const { from, nuxtState } = context
    next()
  }
}
