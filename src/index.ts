import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { serveStatic } from 'hono/bun'
import RootLayout from '../app/layout'
import HomeIndex from '../app/home'
import { chat } from '../routes/chats'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.use('/', jsxRenderer((children) => RootLayout(children)))
app.get('/', (context) => context.render(HomeIndex()))
app.route('/chat', chat)

export default app
