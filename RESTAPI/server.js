import Fastify from 'fastify'
const fastify = Fastify({logger: true})
const PORT = 3000

fastify.get('/', async(req, reply) => {
    return {message: 'hello'}
})

const start = async () => {
    try {
      await fastify.listen(PORT)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()