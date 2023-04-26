import './Footer.css'

const Footer = () => {
    //JSX
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png"></img>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/ig.png"></img>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png"></img>
                        </a>
                    </li>
                </ul>
            </section>
            <section  className='logo'>
                <img src="/imagens/logo1.png" alt="Banner Rodapé" />
            </section>
            <section>
                <p>
                    Desenvolvido por GonFreecss.
                </p>
            </section>
        </footer>
    )

    }
export default Footer