import Link from 'next/link'
const Layout = ({ children, title }) => (
    <div className='root'>
        <header>
            <Link href='/'><a>Home</a></Link><span>&nbsp;</span>
            <Link href='/about'><a>About</a></Link><span>&nbsp;</span>
            <Link href='/hireme'><a>Hire me</a></Link><span>&nbsp;</span>
        </header>
        <h1>{title}</h1>
        {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>{`
        .root{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        header{
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 1em;
            font-size: 1.2rem;
            background: indigo
        }
        header a{
            color: darkgrey;
            text-decoration: none;
            margin-left: 10%
        }
        header a:hover{
            color: lightgray;
            font-weight: bold
        }
        footer{
            padding: 1em;
        }
        `}</style>
        <style global jsx>{
            `
            body{
                margin: 0;
                font-size: 110%;
                background: #f0f0f0
            }
            `
        }</style>
    </div>
)
export default Layout