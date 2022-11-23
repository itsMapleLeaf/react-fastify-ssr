import Fastify from "fastify"
import { renderToString } from "react-dom/server"

const fastify = Fastify({
  logger: true,
})

fastify.get("/", (request, reply) => {
  const rendered = renderToString(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>hi</title>
      </head>
      <body>the</body>
    </html>,
  )
  reply.header("Content-Type", "text/html").send(`<!DOCTYPE html>${rendered}`)
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
