import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Node.js Project'}))

router.get('/about', (req, res) => res.render('about', { title: 'About me'}))

router.get('/contact', (req, res) => res.render('contact', { title: 'Contact me'}))

router.get('/services', (req, res) => res.render('services', { title: 'Services Offered'}))

export default router
