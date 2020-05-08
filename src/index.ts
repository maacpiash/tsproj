import { createServer, IncomingMessage, ServerResponse } from 'http'

function handler(req: IncomingMessage, res: ServerResponse): any {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('Hello, World Wide Web!')
}

const LISTEN_PORT = process.env.PORT || 5000

const server = createServer(handler)

server.listen(LISTEN_PORT)
console.log(`Server started on port ${LISTEN_PORT}`)
