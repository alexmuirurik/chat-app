import { Hono } from "hono"
import ChatIndex from "../app/chats"
import SingleChat from "../app/chats/single"
import { serveStatic } from "hono/bun"
import { jsxRenderer } from "hono/jsx-renderer"
import RootLayout from "../app/layout"

const chat = new Hono()

chat.use('/static/*', serveStatic({ root: './' }))
chat.use('/', jsxRenderer((children) => RootLayout(children)))

chat.get('/', (context) => context.render(ChatIndex())) 
chat.get('/:slug', (context) => {
    const slug = context.req.param('slug')
    return context.render(SingleChat({slug}))
})

chat.post('/', (context) => context.text('Create chat')) 
export { chat }