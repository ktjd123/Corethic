import asyncRoute from 'lib/asyncRoute'

export const Main = asyncRoute(() => import('./Main'))
export const Login = asyncRoute(() => import('/Login'))
export const Register = asyncRoute(() => import('./Register'))
export const Write = asyncRoute(() => import('./Write'))
export const Detail = asyncRoute(() => import('./Detail'))
export const Board = asyncRoute(() => import('./Board'))